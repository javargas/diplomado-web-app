docker run -d -t -i -p 3306:3306 --name sales_db sales_db

CONTAINER_ID=$(docker ps --filter name=sales_db --format "{{.ID}}")
DB_IP=$(docker inspect $CONTAINER_ID|grep "\"IPAddress\": \""|sed -E 's/^.*\"IPAddress\": \"([[:digit:]]{1,3}\.[[:digit:]]{1,3}\.[[:digit:]]{1,3}\.[[:digit:]]{1,3})\",/\1/'|uniq)

docker run -d  -p 4000:4000 -e DB_HOST=DB_IP -e DB_PORT=3306 -e DB_USER=sales -e DB_PASSWORD=2021 -e DB_NAME=sales_db -e URL=0.0.0.0:4000 sales_ms

docker run -d -p 5000:5000 sales_api
