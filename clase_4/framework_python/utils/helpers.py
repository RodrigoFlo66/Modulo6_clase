import pathlib
from datetime import datetime

def screenshot_path(name: str) -> str:
    output_dir = pathlib.Path("reports")/"screenshots"
    output_dir.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    return f"{output_dir}/{timestamp}_{name}.png"