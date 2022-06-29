# adventure

Full-stack JS project

Goals:

1. JS FE: React
2. JS BE: Potentially Express, Node, Nest
3. Relational or noSQL? MongoDB?
4. Websockets

## Setting up your development environment

To run the app you need docker installed and configured.

You will also need to edit your hosts file (/etc/hosts on Linux, C:/Windows/System32/drivers/etc/hosts on Windows, this will require admin privileges) and add the following lines:

```
www.adventure.test    127.0.0.1
adventure.test        127.0.0.1
api.adventure.test    127.0.0.1
```

Guides on how to edit your hosts file can be found at

- https://www.wikihow.com/Edit-the-Hosts-File-on-Windows (Windows)
- https://www.makeuseof.com/tag/modify-manage-hosts-file-linux/ (Linux)

## Running the app

Once the above has been set up, it should be as simple as running docker-compose up anywhere in the project folder, then visiting http://adventure.test/ in your browser
