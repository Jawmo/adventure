(cd client \
  && rm -rf node_modules \
  && rm -f yarn.lock)

(cd server \
  && rm -rf node_modules \
  && rm -f yarn.lock)
  
(docker stop adventure-nginx adventure-db adventure-client adventure-server)
(docker rm -f -v -l adventure-nginx adventure-db adventure-client adventure-server)

./setup.sh