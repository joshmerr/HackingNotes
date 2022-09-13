import call
import urllib
url = urllib.urlopen(localhost)
page= url.getcode()
if page ==200:
	print ("We're all good!")
else:
	print("We're failing!")
	call(["systemctl start apache2"], shell=True)

