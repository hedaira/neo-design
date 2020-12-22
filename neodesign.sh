#!/bin/sh
SERVICE_NAME=neodesign
PID_PATH_NAME=/opt/neodesign/neodesign-pid

SYS_PARAMS="-Xmx8g -Dlogging.file=/opt/neodesign/logs/neodesign.log -Dlogging.level.root=info"
case $1 in
install)
       echo "Starting $SERVICE_NAME ..."
  if [ ! -f $PID_PATH_NAME ]; then
       npm install -g
       echo "$SERVICE_NAME started ..."
  else
       echo "$SERVICE_NAME is already running ..."
  fi
;;
gulp)
       echo "Starting $SERVICE_NAME ..."
  if [ ! -f $PID_PATH_NAME ]; then
       npm gulp
       echo "$SERVICE_NAME started ..."
  else
       echo "$SERVICE_NAME is already running ..."
  fi
;;
start)
       echo "Starting $SERVICE_NAME ..."
  if [ ! -f $PID_PATH_NAME ]; then
       nohup npm run storybook 1>>/opt/neodesign/logs/neodesign.log 2>>/opt/neodesign/logs/neodesign.log & echo $! > $PID_PATH_NAME
       echo "$SERVICE_NAME started ..."
  else
       echo "$SERVICE_NAME is already running ..."
  fi
;;
stop)
  if [ -f $PID_PATH_NAME ]; then
         PID=$(cat $PID_PATH_NAME);
         echo "$SERVICE_NAME stoping ..."
         kill $PID;
         echo "$SERVICE_NAME stopped ..."
         rm $PID_PATH_NAME
  else
         echo "$SERVICE_NAME is not running ..."
  fi
;;
restart)
  if [ -f $PID_PATH_NAME ]; then
      PID=$(cat $PID_PATH_NAME);
      echo "$SERVICE_NAME stopping ...";
      kill $PID;
      echo "$SERVICE_NAME stopped ...";
      rm $PID_PATH_NAME
      echo "$SERVICE_NAME starting ..."
       nohup /usr/jdk64/jdk1.8.0_112/bin/java $SYS_PARAMS -jar $PATH_TO_JAR 2>> /dev/null >>/dev/null & echo $! > $PID_PATH_NAME
      echo "$SERVICE_NAME started ..."
  else
      echo "$SERVICE_NAME is not running ..."
     fi     ;;
 esac
