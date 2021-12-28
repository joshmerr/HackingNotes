import requests

url = 'http://secret.htb:3000/api./user/register'
myobj = {'user': 'pop',
         'email' : 'pop@poop.com',
         'password' : 'balls'}

x = requests.post(url, data = myobj)

print(x.text)
