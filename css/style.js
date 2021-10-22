body {
  display: flex;
    font-size: 12pt;
    justify-content: center;
}
.glass-container {
  position: relative;
  width: calc(100% - 10px);
  height:480px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 3px;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 191, 255, 0);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 0px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 0px rgba(40, 40, 40, 0.35) solid;
  border-right: 0px rgba(40, 40, 40, 0.35) solid;
}
.line-word{
  width: 100%;
  display: block;
  color: #000;
  padding: 6px 0px;
  background:#aa00ff;}
#word{
  padding: 6px 6px;
  width: 100%;
  font-size: 12pt;
  padding: 6px 6px;
  font-family: '微软雅黑';
}
#author{
  position: absolute;
  text-align: right;
  width: 100%;
  font-size: 8pt;
}
.wrapper-main{
  top: 0;
  z-index: -999;
  position: relative;
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  background: url("https://i.loli.net/2021/10/22/QlqHZiF6DECOfhs.jpg") no-repeat;
}
