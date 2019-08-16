// src/__tests__/Samples/Sample1.ts
// KristianFJones <me@kristianjones.dev>
// CaddyFile Sample 1 (Single Entry without curly braces)

export const CaddyFileSample1 = `# Example explains how to setup a basicauth proxy to a webserver

your.public.com

# If you want to use more than one user, just append more rows with the next user
# basicauth / username1 password1
# basicauth / username2 password2

basicauth / username password

# Proxy to localhost port 8080
# If multiple backends are used, just specify them separated by space
# proxy / localhost:8080 localhost:8081 192.168.99.100:8083

proxy /api http://api {
  websocket
  insecure_skip_verify
}

basicauth "Mary Lou" milkshakes {
  realm "Mary Lou's documents"
  /notes-for-mary-lou.txt
  /marylou-files
  /another-file.txt
}

basicauth username milkshakes {
  realm TESTRealm
  /notes-for-mary-lou.txt
  /marylou-files
  /another-file.txt
}

gzip

bind 1.1.1.1

proxy / localhost:8080`;
