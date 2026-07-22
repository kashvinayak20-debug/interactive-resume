import sys
import http.server
import socketserver
import webbrowser
import os
import time
import threading

PORT = 8080

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.path.dirname(__file__), **kwargs)

if __name__ == "__main__":
    sys.stdout.reconfigure(encoding='utf-8')

    print("\n" + "="*60)
    print("Starting Interactive Resume & Portfolio Web App")
    print(f"Local URL: http://127.0.0.1:{PORT}")
    print("="*60 + "\n")

    def open_browser():
        time.sleep(1.0)
        webbrowser.open(f"http://127.0.0.1:{PORT}")

    threading.Thread(target=open_browser, daemon=True).start()

    with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
        httpd.serve_forever()
