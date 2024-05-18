# WattWiser
Project mata kuliah Software Engineer Semester 4  
Wattwise is a web-based electricity calculator that can help you calculate the amount of electricity used in your home, sum the bills by the time (day,week, and month), and predict how long it will take for your electricity tokens to run out (in day), which will be visualized using graph.  
# How to Use
website link: https://wattwise.wisnuputra.xyz/  
1. Go to Service
  
![img](https://drive.google.com/uc?export=view&id=1Y1x0TDKoy4aQ95MC-2iHCENzzhzCc_84)  
3. Input Electric tools Watt, Hour Usage, Electricity tariff, and Electricity Token (*Optional)  
  
![img](https://drive.google.com/uc?export=view&id=1HoVq3ptopD_S-i4zHHVOAMrYSYHT-NHZ)  
5. Click ``Calculate Consumtion`` Button  
  
![img](https://drive.google.com/uc?export=view&id=1U2qIj4xfsJj0GTz7Uhj5xvP0UNg5sn9L)
# Tech Stack 
1. Node.js
2. Express.js
3. EJS
4. Bootstrap
5. NGINX
6. Docker
7. Cloudflare
# Architecture  
Wattwise hosted at Alibabacloud's ECS instance and running on Docker container, when user accessing ``https://wattwise.wisnuputra.xyz`` cloudflare thru it's tunnel will route user's request to Nginx, then distribute equally (round robin loud balancing) to 3 web server.  
  
![img](https://drive.google.com/uc?export=view&id=13CkroTVkFGj5DT7N5Dt6zbgU-pUBf_zR)
## Why using cloudflare?  
Cloudflare on it's Zero Trust network tunnel feature provided us with free secure HTTPS connection.  
Reference: https://youtu.be/tpgai7X-Id0?si=xXtRlBRL1fZB1LyZ by Aji Diyantoro  
# Docker Use
``run -d --name {container name} -p 8080:80 -e SERVER_NAME={server name} wisnup001binus/wattwise:2.0``  
