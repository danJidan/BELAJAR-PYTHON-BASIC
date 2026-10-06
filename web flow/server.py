import http.server
import socketserver
import webbrowser
import sys
import os

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        # Clean logging
        sys.stderr.write(f"[{self.log_date_time_string()}] {format % args}\n")

def run():
    port = PORT
    for attempt in range(5):
        try:
            with socketserver.TCPServer(("", port), Handler) as httpd:
                url = f"http://localhost:{port}"
                print("=" * 60)
                print("🚀 MODUL PEMBELAJARAN FLOWCHART - LOCALHOST SERVER")
                print(f"👉 Akses Website di: {url}")
                print("=" * 60)
                print("Tekan Ctrl + C di terminal untuk menghentikan server.\n")
                
                # Auto-open browser
                try:
                    webbrowser.open(url)
                except Exception:
                    pass

                httpd.serve_forever()
        except OSError as e:
            if "address already in use" in str(e).lower() or "winerror 10048" in str(e).lower():
                port += 1
            else:
                raise e

if __name__ == "__main__":
    run()
