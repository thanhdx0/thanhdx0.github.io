import os
import shutil
import glob

def main():
    base_dir = r"\\wsl.localhost\Ubuntu-24.04\home\thanhdang\workspace\thanhdx0.github.io"
    
    # 1. Define source and destination
    writings_dir = os.path.join(base_dir, "writings")
    
    posts = [
        ("2020/03/21/first-post", "first-post"),
        ("2024/09/01/building-scalable-apps", "building-scalable-apps")
    ]
    
    for src_rel, dst_name in posts:
        src = os.path.join(base_dir, src_rel)
        dst = os.path.join(writings_dir, dst_name)
        
        if os.path.exists(src):
            print(f"Moving {src} to {dst}")
            if os.path.exists(dst):
                shutil.rmtree(dst)
            shutil.move(src, dst)
        else:
            print(f"Source not found: {src}")

    # 2. Cleanup empty folders
    # Remove top level 2020 and 2024
    for year in ["2020", "2024"]:
        path = os.path.join(base_dir, year)
        if os.path.exists(path):
            print(f"Removing old year folder: {path}")
            shutil.rmtree(path)
            
    # Remove archive subfolders in writings
    archive_2020 = os.path.join(writings_dir, "2020")
    if os.path.exists(archive_2020):
        print(f"Removing archive folder: {archive_2020}")
        shutil.rmtree(archive_2020)

    # 3. Update all index.html files
    all_html = glob.glob(os.path.join(base_dir, "**", "index.html"), recursive=True)
    
    replacements = [
        ("/2024/09/01/building-scalable-apps/", "/writings/building-scalable-apps/"),
        ("/2020/03/21/first-post/", "/writings/first-post/"),
        ('href="/archives/"', 'href="/writings/"'),
        ('href="/archives"', 'href="/writings/"')
    ]
    
    for html_file in all_html:
        with open(html_file, "r", encoding="utf-8") as f:
            content = f.read()
        
        new_content = content
        for old, new in replacements:
            new_content = new_content.replace(old, new)
            
        if new_content != content:
            print(f"Updating links in {html_file}")
            with open(html_file, "w", encoding="utf-8") as f:
                f.write(new_content)

if __name__ == "__main__":
    main()
