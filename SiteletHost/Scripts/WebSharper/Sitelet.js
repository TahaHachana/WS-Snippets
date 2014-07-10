(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,Sitelet,Geolocation,Snippet1,Client,String,WebSharper,Concurrency,window,Html,Default,List,Operators,EventsPervasives,document,google,visualization,DataTable,Google,Snippet11,Client1,LineChart,Seq,Snippet2,Client2,PieChart,Snippet3,Html5,Snippet12,Client3,HTML5,T,Snippet10,JS,Snippet121,Client4,Snippet14,Snippet21,Client5,Snippet31,Client6,WebSocket,Snippet4,Client7,Snippet5,Client8,Snippet6,Client9,Date,Math,Number,Snippet7,Clienta,Snippet8,Snippet9,JQuery,Snippet13,Js,Operators1,jQuery,setInterval,clearInterval,JQueryUI,Snippet15,JS1,JQueryUI1,Tabs,Datepicker,JavaScript,Js1,Snippet22,Clientb,Arrays,Snippet32,Clientc,Snippet41,Clientd,Snippet51,Cliente,Snippet61,Clientf,Remoting,Snippet71,Client10,Snippet81,JS2,Snippet91,JS3,clearTimeout,setTimeout,alert,Piglets,Piglet1,Login,Client11,Pervasives,Validation,Controls,Result,NewSnippet,Client12,Search,Client13,Twitter,Snippet16,Client14;
 Runtime.Define(Global,{
  Sitelet:{
   Geolocation:{
    Snippet1:{
     Client:{
      display:function(p)
      {
       var coords,copyOfStruct,copyOfStruct1,copyOfStruct2;
       coords=p.coords;
       copyOfStruct=coords.longitude;
       Client.setText("longitude",String(copyOfStruct));
       copyOfStruct1=coords.latitude;
       Client.setText("latitude",String(copyOfStruct1));
       Client.setText("altitude",Client.toStr(coords.altitude));
       copyOfStruct2=coords.accuracy;
       Client.setText("accuracy",String(copyOfStruct2));
       Client.setText("alt-acc",Client.toStr(coords.altitudeAccuracy));
       Client.setText("heading",Client.toStr(coords.heading));
       Client.setText("speed",Client.toStr(coords.speed));
       return Client.setText("timestamp",p.timestamp.toString());
      },
      getPosition:function()
      {
       return Concurrency.Delay(function()
       {
        window.navigator.geolocation.getCurrentPosition(function(p)
        {
         return Client.display(p);
        });
        return Concurrency.Return(null);
       });
      },
      main:function()
      {
       var x,arg00;
       x=Default.Button(List.ofArray([Default.Text("Track My Location"),Default.Attr().Class("btn btn-primary")]));
       arg00=function()
       {
        return function()
        {
         return Concurrency.Start(Concurrency.Delay(function()
         {
          return Concurrency.Bind(Client.getPosition(),function()
          {
           return Concurrency.Return(null);
          });
         }));
        };
       };
       EventsPervasives.Events().OnClick(arg00,x);
       return Default.Div(List.ofArray([Default.Tags().NewTag("style",List.ofArray([Default.Text("td {width: 200px;}")])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("table-responsive")])),List.ofArray([Operators.add(Default.Table(List.ofArray([Default.Attr().Class("table table-bordered"),Default.Attr().NewAttr("id","geolocation-table")])),List.ofArray([Client.tr("Longitude","longitude"),Client.tr("Latitude","latitude"),Client.tr("Altitude","altitude"),Client.tr("Accuracy","accuracy"),Client.tr("Altitude Accuracy","alt-acc"),Client.tr("Heading","heading"),Client.tr("Speed","speed"),Client.tr("Time Stamp","timestamp")]))])),x]));
      },
      setText:function(id,txt)
      {
       document.getElementById(id).textContent=txt;
      },
      toStr:function(f)
      {
       var _arg1;
       _arg1=String(f);
       return _arg1==="null"?"NA":_arg1;
      },
      tr:function(thTxt,tdId)
      {
       return Default.TR(List.ofArray([Default.TH(List.ofArray([Default.Text(thTxt)])),Default.TD(List.ofArray([Default.Attr().NewAttr("id",tdId)]))]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client.main();
      }
     })
    }
   },
   Google:{
    Snippet1:{
     Client:{
      main:function()
      {
       var options,dataTable,data,x;
       options={};
       options.title="Company Performance";
       dataTable=new DataTable();
       dataTable.addColumn("string","Year");
       dataTable.addColumn("number","Sales");
       dataTable.addColumn("number","Expenses");
       dataTable.addRows(4);
       Client1.setCell(dataTable,0,0,"2004");
       Client1.setCell(dataTable,1,0,"2005");
       Client1.setCell(dataTable,2,0,"2006");
       Client1.setCell(dataTable,3,0,"2007");
       Client1.setCell(dataTable,0,1,1000);
       Client1.setCell(dataTable,1,1,1170);
       Client1.setCell(dataTable,2,1,660);
       Client1.setCell(dataTable,3,1,1030);
       Client1.setCell(dataTable,0,2,400);
       Client1.setCell(dataTable,1,2,460);
       Client1.setCell(dataTable,2,2,1120);
       Client1.setCell(dataTable,3,2,540);
       data=dataTable;
       x=Default.Div(List.ofArray([Default.Attr().NewAttr("style","width: 900px; height: 500px;")]));
       Operators.OnAfterRender(function(elt)
       {
        return(new LineChart(elt.Body)).draw(data,options);
       },x);
       return x;
      },
      setCell:function(dataTable,row,column,value)
      {
       dataTable.setCell(row,column,value);
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client1.main();
      }
     })
    },
    Snippet2:{
     Client:{
      data:Runtime.Field(function()
      {
       return List.ofArray([["CSS",5421.54],["HTML",15632.47],["Images",12478.98],["JavaScript",42568.47],["Other",3456.29]]);
      }),
      dataTable:function(data)
      {
       var dataTable;
       dataTable=new DataTable();
       dataTable.addColumn("string","Resource");
       dataTable.addColumn("number","Size");
       dataTable.addRows(5);
       Seq.iteri(function(idx)
       {
        return Runtime.Tupled(function(tupledArg)
        {
         var y;
         y=tupledArg[1];
         dataTable.setCell(idx,0,tupledArg[0]);
         return dataTable.setCell(idx,1,y);
        });
       },data);
       return dataTable;
      },
      main:function()
      {
       var x;
       x=Default.Div(List.ofArray([Default.Attr().NewAttr("style","width: 900px; height: 500px;")]));
       Operators.OnAfterRender(function(elt)
       {
        return Client2.pie(Client2.data(),elt.Body);
       },x);
       return x;
      },
      pie:function(data,dom)
      {
       var dt,options;
       dt=Client2.dataTable(data);
       options={};
       options.title="Resources Breakdown";
       return(new PieChart(dom)).draw(dt,options);
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client2.main();
      }
     })
    },
    Snippet3:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return Snippet3.map();
      }
     }),
     map:function()
     {
      var x;
      x=Default.Div(List.ofArray([Default.Attr().NewAttr("id","map")]));
      Operators.OnAfterRender(function(elt)
      {
       new google.maps.Map(elt.Body,{
        center:new google.maps.LatLng(21.427378,39.814838),
        zoom:4
       });
      },x);
      return x;
     }
    }
   },
   Html5:{
    Snippet1:{
     Client:{
      drawLogo:function(ctx)
      {
       ctx.font="60px 'Gill Sans Ultra Bold'";
       ctx.fillText("HTML",40,60);
       ctx.translate(0,70);
       Client3.drawShape(ctx,"#E34C26",44,255,List.ofArray([[22,5],[267,5],[244,255],[144,283]]));
       Client3.drawShape(ctx,"#F06529",144,262,List.ofArray([[225,239],[244,25],[144,25]]));
       Client3.drawShape(ctx,"#EBEBEB",144,118,List.ofArray([[103,118],[101,87],[144,87],[144,56],[67,56],[75,149],[144,149]]));
       Client3.drawShape(ctx,"#EBEBEB",144,198,List.ofArray([[110,189],[108,164],[77,164],[81,212],[144,230]]));
       Client3.drawShape(ctx,"#FFFFFF",144,118,List.ofArray([[144,149],[182,149],[178,189],[144,198],[144,230],[207,212],[215,118]]));
       return Client3.drawShape(ctx,"#FFFFFF",144,56,List.ofArray([[144,87],[218,87],[221,56]]));
      },
      drawShape:function(_,_1,_2,_3,_4)
      {
       return((Runtime.Tupled(function(moveTo)
       {
        return function(coords)
        {
         _.fillStyle=_1;
         _.beginPath();
         (Runtime.Tupled(function(tupledArg)
         {
          return _.moveTo(tupledArg[0],tupledArg[1]);
         }))(moveTo);
         Seq.iter(Runtime.Tupled(function(tupledArg)
         {
          return _.lineTo(tupledArg[0],tupledArg[1]);
         }),coords);
         _.closePath();
         return _.fill();
        };
       }))([_2,_3]))(_4);
      },
      main:function()
      {
       var elt,canvas;
       elt=HTML5.Tags().NewTag("canvas",Runtime.New(T,{
        $:0
       }));
       canvas=elt.Body;
       canvas.height=400;
       canvas.width=600;
       Client3.drawLogo(canvas.getContext("2d"));
       return elt;
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client3.main();
      }
     })
    },
    Snippet10:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return JS.main();
      }
     }),
     JS:{
      displayPosition:function(p)
      {
       var coords;
       coords=p.coords;
       JS.setText("longitude",coords.longitude);
       JS.setText("latitude",coords.latitude);
       JS.setText("altitude",coords.altitude);
       JS.setText("accuracy",coords.accuracy);
       JS.setText("alt-acc",coords.altitudeAccuracy);
       JS.setText("heading",coords.heading);
       JS.setText("speed",coords.speed);
       return JS.setText("timestamp",p.timestamp);
      },
      main:function()
      {
       var options,x,arg00;
       options={
        enableHighAccuracy:true,
        maximumAge:60000,
        timeout:10000
       };
       x=Operators.add(Default.Button(List.ofArray([Default.Attr().Class("btn btn-primary btn-large")])),List.ofArray([Default.Text("Track My Location")]));
       arg00=function()
       {
        return function()
        {
         return Concurrency.Start(Concurrency.Delay(function()
         {
          return Concurrency.Bind(Concurrency.Delay(function()
          {
           window.navigator.geolocation.getCurrentPosition(function(p)
           {
            return JS.displayPosition(p);
           },function()
           {
            return null;
           },options);
           return Concurrency.Return(null);
          }),function()
          {
           return Concurrency.Return(null);
          });
         }));
        };
       };
       EventsPervasives.Events().OnClick(arg00,x);
       return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("table-responsive")])),List.ofArray([Operators.add(Default.Table(List.ofArray([Default.Attr().Class("table table-bordered"),Default.Attr().NewAttr("id","geolocation-table")])),List.ofArray([JS.tr("Longitude","longitude"),JS.tr("Latitude","latitude"),JS.tr("Altitude","altitude"),JS.tr("Accuracy","accuracy"),JS.tr("Altitude Accuracy","alt-acc"),JS.tr("Heading","heading"),JS.tr("Speed","speed"),JS.tr("Time Stamp","timestamp")])),x]));
      },
      setText:function(id,property)
      {
       var propertyStr;
       propertyStr=JS.toStr(property);
       document.getElementById(id).textContent=propertyStr;
       return;
      },
      toStr:function(x)
      {
       var _arg1;
       _arg1=String(x);
       return _arg1==="null"?"NA":_arg1;
      },
      tr:function(thTxt,tdId)
      {
       return Default.TR(List.ofArray([Default.TH(List.ofArray([Default.Text(thTxt)])),Default.TD(List.ofArray([Default.Attr().NewAttr("id",tdId),Default.Attr().NewAttr("style","width: 250px;")]))]));
      }
     }
    },
    Snippet11:{
     Control:Runtime.Class({
      get_Body:function()
      {
       var x,arg00;
       x=Operators.add(Default.Button(List.ofArray([Default.Attr().Class("btn btn-primary btn-lg")])),List.ofArray([Default.Text("Click me")]));
       arg00=function()
       {
        return function()
        {
         return window.alert("This is an alert dialog.");
        };
       };
       EventsPervasives.Events().OnClick(arg00,x);
       return x;
      }
     })
    },
    Snippet12:{
     Client:{
      lineTo:function(_,_1,_2,_3,_4,_5)
      {
       return((Runtime.Tupled(function(coords)
       {
        return Runtime.Tupled(function(_coords_)
        {
         _.lineCap=_1;
         _.beginPath();
         (Runtime.Tupled(function(tupledArg)
         {
          return _.moveTo(tupledArg[0],tupledArg[1]);
         }))(coords);
         (Runtime.Tupled(function(tupledArg)
         {
          return _.lineTo(tupledArg[0],tupledArg[1]);
         }))(_coords_);
         return _.stroke();
        });
       }))([_2,_3]))([_4,_5]);
      },
      main:function()
      {
       var _this,elt,canvas,ctx;
       _this=HTML5.Tags();
       elt=_this.NewTag("canvas",Runtime.New(T,{
        $:0
       }));
       canvas=elt.Body;
       canvas.height=400;
       canvas.width=600;
       ctx=canvas.getContext("2d");
       ctx.lineWidth=40;
       Client4.lineTo(ctx,"butt",50,50,50,350);
       Client4.lineTo(ctx,"round",250,50,250,350);
       Client4.lineTo(ctx,"square",450,50,450,350);
       return elt;
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client4.main();
      }
     })
    },
    Snippet13:{
     Control:Runtime.Class({
      get_Body:function()
      {
       var elt,audio;
       elt=HTML5.Tags().NewTag("audio",Runtime.New(T,{
        $:0
       }));
       audio=elt.Body;
       audio.src="/AlFatiha.mp3";
       audio.controls=true;
       return elt;
      }
     })
    },
    Snippet14:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return Snippet14.main();
      }
     }),
     btn:function(txt)
     {
      return Operators.add(Default.Button(List.ofArray([Default.Attr().Class("btn btn-default"),Default.Attr().NewAttr("type","button")])),List.ofArray([Default.Text(txt)]));
     },
     main:function()
     {
      var x,arg00,x1,arg001,x2,arg002;
      x=Snippet14.btn("Back");
      arg00=function()
      {
       return function()
       {
        return window.history.back();
       };
      };
      EventsPervasives.Events().OnClick(arg00,x);
      x1=Snippet14.btn("Forward");
      arg001=function()
      {
       return function()
       {
        return window.history.forward();
       };
      };
      EventsPervasives.Events().OnClick(arg001,x1);
      x2=Snippet14.btn("Go back 2 pages");
      arg002=function()
      {
       return function()
       {
        return window.history.go(-2);
       };
      };
      EventsPervasives.Events().OnClick(arg002,x2);
      return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("btn-group btn-group-lg")])),List.ofArray([x,x1,x2]));
     }
    },
    Snippet2:{
     Client:{
      main:function()
      {
       var location;
       location=window.location;
       return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("table-responsive")])),List.ofArray([Operators.add(Default.Table(List.ofArray([Default.Attr().Class("table table-striped"),Default.Attr().NewAttr("id","location-table")])),List.ofArray([Default.TR(List.ofArray([Default.TH(List.ofArray([Default.Text("Property")])),Default.TH(List.ofArray([Default.Text("Value")]))])),Client5.tr("Hash",location.hash),Client5.tr("Host",location.host),Client5.tr("Hostname",location.hostname),Client5.tr("Href",location.href),Client5.tr("Pathname",location.pathname),Client5.tr("Port",location.port),Client5.tr("Protocol",location.protocol),Client5.tr("Search",location.search)]))]));
      },
      tr:function(td,_td_)
      {
       return Default.TR(List.ofArray([Default.TD(List.ofArray([Default.Text(td)])),Default.TD(List.ofArray([Default.Text(_td_)]))]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client5.main();
      }
     })
    },
    Snippet3:{
     Client:{
      main:function()
      {
       var elt,video;
       elt=Operators.add(HTML5.Tags().NewTag("video",List.ofArray([Default.Attr().NewAttr("height","360px"),Default.Attr().NewAttr("width","640px")])),List.ofArray([HTML5.Tags().NewTag("source",List.ofArray([Default.Attr().NewAttr("src","/Videos/madagascar.mp4"),Default.Attr().NewAttr("type","video/mp4")]))]));
       video=elt.Body;
       video.autoplay=false;
       video.controls=true;
       video.preload="metadata";
       video.poster="/Images/madagascar.jpg";
       return elt;
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client6.main();
      }
     })
    },
    Snippet4:{
     Client:{
      append:function(id,btn)
      {
       document.getElementById(id).appendChild(btn.Body);
      },
      connect:function(msgText)
      {
       var ws,x,arg00,sendBtn,x1,arg001;
       document.getElementById("connect-btn").setAttribute("disabled","disabled");
       ws=new WebSocket("ws://echo.websocket.org");
       x=Default.Button(List.ofArray([Default.Text("Send"),Default.Attr().Class("btn btn-primary")]));
       arg00=function()
       {
        return function()
        {
         var txt;
         txt=msgText.get_Value();
         ws.send(txt);
         return Client7.log("Sent: "+txt,"black");
        };
       };
       EventsPervasives.Events().OnClick(arg00,x);
       sendBtn=x;
       x1=Default.Button(List.ofArray([Default.Text("Disconnect"),Default.Attr().Class("btn btn-warning")]));
       arg001=function()
       {
        return function()
        {
         return ws.close();
        };
       };
       EventsPervasives.Events().OnClick(arg001,x1);
       return Client7.handleEvents(ws,x1,sendBtn);
      },
      handleEvents:function(ws,disconnectBtn,sendBtn)
      {
       ws.onerror=function()
       {
        return Client7.log("Error","red");
       };
       ws.onmessage=function(msg)
       {
        return Client7.log("Received: "+String(msg.data),"blue");
       };
       ws.onopen=function()
       {
        Client7.append("send-btn",sendBtn);
        Client7.append("btns",disconnectBtn);
        return Client7.log("Connected","green");
       };
       ws.onclose=function()
       {
        document.getElementById("connect-btn").removeAttribute("disabled");
        sendBtn["HtmlProvider@32"].Remove(sendBtn.Body);
        disconnectBtn["HtmlProvider@32"].Remove(disconnectBtn.Body);
        return Client7.log("Disconnected","rgb(250, 167, 50)");
       };
       return;
      },
      log:function(text,color)
      {
       var p,arg10;
       arg10="color: "+color;
       p=Default.P(List.ofArray([Default.Text(text),Default.Attr().NewAttr("style",arg10)]));
       document.getElementById("ws-log").appendChild(p.Body);
       return;
      },
      main:function()
      {
       var msgText,logDiv,x,arg00,arg10,arg101,x1,arg001;
       msgText=Default.TextArea(List.ofArray([Default.Text("Hello WebSocket"),Default.Attr().NewAttr("id","msg"),Default.Attr().Class("form-control")]));
       logDiv=Default.Div(List.ofArray([Default.Attr().NewAttr("id","ws-log")]));
       x=Default.Button(List.ofArray([Default.Text("Connect"),Default.Attr().NewAttr("id","connect-btn"),Default.Attr().Class("btn btn-success"),Default.Attr().NewAttr("style","margin-right: 10px;")]));
       arg00=function()
       {
        return function()
        {
         return Client7.connect(msgText);
        };
       };
       EventsPervasives.Events().OnClick(arg00,x);
       arg10=List.ofArray([Default.Text("Message:"),Default.Attr().NewAttr("style","font-weight: bold;")]);
       arg101=List.ofArray([Default.Text("Log:"),Default.Attr().NewAttr("style","font-weight: bold;")]);
       x1=Default.Button(List.ofArray([Default.Text("Clear"),Default.Attr().NewAttr("style","margin-top: 10px;"),Default.Attr().Class("btn btn-default")]));
       arg001=function()
       {
        return function()
        {
         return logDiv.set_Html("");
        };
       };
       EventsPervasives.Events().OnClick(arg001,x1);
       return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("row")])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("col-lg-4"),Default.Attr().NewAttr("id","ws-col-1")])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().NewAttr("style","margin-bottom: 10px;"),Default.Attr().NewAttr("id","btns")])),List.ofArray([x])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("form-group")])),List.ofArray([Default.Tags().NewTag("label",arg10),msgText])),Default.Div(List.ofArray([Default.Attr().NewAttr("id","send-btn")]))])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("col-lg-5"),Default.Attr().NewAttr("style","border-left: 1px solid lightgray;"),Default.Attr().NewAttr("id","ws-col-1")])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().NewAttr("style","margin-left: 20px;")])),List.ofArray([Default.Tags().NewTag("label",arg101),logDiv,x1]))]))]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client7.main();
      }
     })
    },
    Snippet5:{
     Client:{
      main:function()
      {
       var x,arg00;
       x=Default.Button(List.ofArray([Default.Text("Show Modal Dialog"),Default.Attr().Class("btn btn-primary")]));
       arg00=function()
       {
        return function()
        {
         window.showModalDialog("/modal.html");
        };
       };
       EventsPervasives.Events().OnClick(arg00,x);
       return x;
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client8.main();
      }
     })
    },
    Snippet6:{
     Client:{
      main:function()
      {
       var elt,canvas,ctx;
       elt=HTML5.Tags().NewTag("canvas",List.ofArray([Default.Text("The canvas element isn't supported by your browser.")]));
       elt["HtmlProvider@32"].SetStyle(elt.Body,"border: 1px solid;");
       canvas=elt.Body;
       canvas.height=400;
       canvas.width=600;
       ctx=canvas.getContext("2d");
       ctx.font="50px Arial";
       ctx.fillText("Hello Canvas",20,50);
       return elt;
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client9.main();
      }
     })
    },
    Snippet7:{
     Client:{
      draw:function(ctx)
      {
       var now,i,i1,sec,min,hr,hr1;
       now=new Date();
       ctx.save();
       ctx.clearRect(0,0,150,150);
       ctx.translate(75,75);
       ctx.scale(0.4,0.4);
       ctx.rotate(-Math.PI/2);
       ctx.strokeStyle="black";
       ctx.fillStyle="white";
       ctx.lineWidth=8;
       ctx.save();
       for(i=1;i<=12;i++){
        ctx.beginPath();
        ctx.rotate(Math.PI/6);
        ctx.moveTo(100,0);
        ctx.lineTo(120,0);
        ctx.stroke();
       }
       ctx.restore();
       ctx.save();
       ctx.lineWidth=5;
       for(i1=0;i1<=59;i1++){
        if(i1%5!==0)
         {
          ctx.beginPath();
          ctx.moveTo(117,0);
          ctx.lineTo(120,0);
          ctx.stroke();
         }
        ctx.rotate(Math.PI/30);
       }
       ctx.restore();
       sec=now.getSeconds();
       min=now.getMinutes();
       hr=Number(now.getHours());
       hr1=hr>=12?hr-12:hr;
       ctx.fillStyle="black";
       ctx.save();
       ctx.rotate(Math.PI*(Number(hr1)/6+Number(min)/360+Number(sec)/21600));
       ctx.lineWidth=14;
       ctx.beginPath();
       ctx.moveTo(-20,0);
       ctx.lineTo(80,0);
       ctx.stroke();
       ctx.restore();
       ctx.save();
       ctx.rotate(Math.PI*(Number(min)/30+Number(sec)/1800));
       ctx.lineWidth=10;
       ctx.beginPath();
       ctx.moveTo(-28,0);
       ctx.lineTo(112,0);
       ctx.stroke();
       ctx.restore();
       ctx.save();
       ctx.rotate(Number(sec)*Math.PI/30);
       ctx.strokeStyle="#D40000";
       ctx.fillStyle="#D40000";
       ctx.lineWidth=6;
       ctx.beginPath();
       ctx.moveTo(-30,0);
       ctx.lineTo(83,0);
       ctx.stroke();
       ctx.beginPath();
       ctx.arc(0,0,10,0,Math.PI*2,true);
       ctx.fill();
       ctx.beginPath();
       ctx.arc(95,0,10,0,Math.PI*2,true);
       ctx.stroke();
       ctx.fillStyle="#555";
       ctx.arc(0,0,3,0,Math.PI*2,true);
       ctx.fill();
       ctx.restore();
       ctx.beginPath();
       ctx.lineWidth=14;
       ctx.strokeStyle="#325FA2";
       ctx.arc(0,0,142,0,Math.PI*2,true);
       ctx.stroke();
       return ctx.restore();
      },
      loop:function(ctx)
      {
       return Concurrency.Delay(function()
       {
        return Concurrency.Bind(Concurrency.Sleep(1000),function()
        {
         Clienta.draw(ctx);
         return Concurrency.Bind(Clienta.loop(ctx),function()
         {
          return Concurrency.Return(null);
         });
        });
       });
      },
      main:function()
      {
       var elt,canvas,ctx;
       elt=HTML5.Tags().NewTag("canvas",List.ofArray([Default.Attr().NewAttr("id","clock")]));
       canvas=elt.Body;
       canvas.width=150;
       canvas.height=150;
       ctx=canvas.getContext("2d");
       Clienta.draw(ctx);
       Concurrency.Start(Clienta.loop(ctx));
       return elt;
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Clienta.main();
      }
     })
    },
    Snippet8:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return Snippet8.main();
      }
     }),
     main:function()
     {
      var x,arg00;
      x=Operators.add(Default.Button(List.ofArray([Default.Attr().Class("btn btn-primary btn-large")])),List.ofArray([Default.Text("Home Page")]));
      arg00=function()
      {
       return function()
       {
        return window.parent.location.assign("/");
       };
      };
      EventsPervasives.Events().OnClick(arg00,x);
      return x;
     }
    },
    Snippet9:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return Snippet9.main();
      }
     }),
     main:function()
     {
      var elt,canvas,ctx;
      elt=HTML5.Tags().NewTag("canvas",List.ofArray([Default.Text("The canvas element isn't supported by your browser.")]));
      elt["HtmlProvider@32"].SetStyle(elt.Body,"border: 1px solid;");
      canvas=elt.Body;
      canvas.height=400;
      canvas.width=600;
      ctx=canvas.getContext("2d");
      ctx.fillStyle="blue";
      ctx.fillRect(50,50,300,100);
      return elt;
     }
    }
   },
   JQuery:{
    Snippet1:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return Js.main();
      }
     }),
     Js:{
      baseUrl:Runtime.Field(function()
      {
       return"http://placekitten.com/200/200?image=";
      }),
      fadeIn:function(jquery,selector)
      {
       return jquery.children(selector).fadeIn(1000);
      },
      main:function()
      {
       var x;
       x=Operators.add(Default.Div(List.ofArray([Default.Attr().NewAttr("id","jquery-slider-container")])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().NewAttr("id","jquery-slider")])),Seq.toList(Seq.delay(function()
       {
        return Seq.map(function(x1)
        {
         var arg10;
         arg10=Js.baseUrl()+Global.String(x1);
         return Default.Img(List.ofArray([Default.Attr().NewAttr("src",arg10)]));
        },Operators1.range(1,5));
       }))),Default.A(List.ofArray([Default.Attr().NewAttr("id","prev-slide"),Default.Text("Prev")])),Default.A(List.ofArray([Default.Attr().NewAttr("id","next-slide"),Default.Text("Next")]))]));
       Operators.OnAfterRender(function()
       {
        var slider,direction,f,timer;
        slider=jQuery("#jquery-slider");
        direction={
         $:1
        };
        f=function(_arg20_)
        {
         return Js.scroll(slider,direction,_arg20_);
        };
        timer={
         contents:setInterval(f,2000)
        };
        slider.children().first().show();
        jQuery("#jquery-slider, #prev-slide, #next-slide").hover(function()
        {
         return clearInterval(timer.contents);
        },function()
        {
         timer.contents=setInterval(f,2000);
        });
        return jQuery("#prev-slide, #next-slide").click(function(event)
        {
         var linkId;
         linkId=this.getAttribute("id");
         event.preventDefault();
         return linkId==="prev-slide"?Js.scroll(slider,{
          $:0
         },null):f(null);
        });
       },x);
       return x;
      },
      scroll:function(jquery,direction)
      {
       var activeSlide,index,_fadeIn_,slidesCount;
       activeSlide=jquery.children(":visible");
       index=activeSlide.index();
       activeSlide.fadeOut(1000);
       _fadeIn_=function(selector)
       {
        return Js.fadeIn(jquery,selector);
       };
       slidesCount=jquery.children().length;
       return direction.$==0?index===0?_fadeIn_(":eq("+Global.String(slidesCount-1)+")"):_fadeIn_(":eq("+Global.String(index-1)+")"):index===slidesCount-1?_fadeIn_(":eq(0)"):_fadeIn_(":eq("+Global.String(index+1)+")");
      }
     }
    }
   },
   JQueryUI:{
    Snippet1:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return JS1.main();
      }
     }),
     JS:{
      addTabBtn:function(tabs)
      {
       var x,arg00;
       x=Operators.add(Default.Button(List.ofArray([Default.Attr().Class("btn btn-success"),Default.Attr().NewAttr("style","margin-right: 8px;")])),List.ofArray([Default.Text("Add")]));
       arg00=function()
       {
        return function()
        {
         var patternInput;
         patternInput=JS1.tab(tabs.get_Length()+1);
         return tabs.Add1(patternInput[1],patternInput[0]);
        };
       };
       EventsPervasives.Events().OnClick(arg00,x);
       return x;
      },
      main:function()
      {
       var tabs;
       tabs=Tabs.New2(List.map(function(x)
       {
        return JS1.tab(x);
       },Seq.toList(Operators1.range(1,3))));
       return Default.Div(List.ofArray([tabs,Operators.add(Default.Div(List.ofArray([Default.Attr().NewAttr("style","margin-top: 8px;")])),List.ofArray([JS1.addTabBtn(tabs),JS1.removeTabBtn(tabs)]))]));
      },
      removeTabBtn:function(tabs)
      {
       var x,arg00;
       x=Operators.add(Default.Button(List.ofArray([Default.Attr().Class("btn btn-danger")])),List.ofArray([Default.Text("Remove")]));
       arg00=function()
       {
        return function()
        {
         var matchValue;
         try
         {
          return tabs.Remove(tabs.get_Length()-1);
         }
         catch(matchValue)
         {
          return null;
         }
        };
       };
       EventsPervasives.Events().OnClick(arg00,x);
       return x;
      },
      tab:function(x)
      {
       var xStr;
       xStr=Global.String(x);
       return["Header "+xStr,Default.Div(List.ofArray([Default.Text("Tab "+xStr+" content")]))];
      }
     }
    },
    Snippet2:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return Datepicker.New4();
      }
     })
    }
   },
   Js:{
    Snippet1:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return Default.H2(List.ofArray([Default.Text("Hello World!")]));
      }
     })
    },
    Snippet2:{
     Client:{
      inputElt:function()
      {
       return Default.Input(List.ofArray([Default.Attr().Class("form-control"),Default.Attr().NewAttr("type","text"),Default.Attr().NewAttr("value","Hello console!"),HTML5.Attr().NewAttr("autofocus","autofocus")]));
      },
      logBtn:function(elt)
      {
       var x,arg00;
       x=Operators.add(Default.Button(List.ofArray([Default.Attr().Class("btn btn-primary"),Default.Attr().NewAttr("type","button")])),List.ofArray([Default.Text("Log")]));
       arg00=function()
       {
        return function()
        {
         return JavaScript.Log(elt.get_Value());
        };
       };
       EventsPervasives.Events().OnClick(arg00,x);
       return x;
      },
      main:function()
      {
       var input,arg10,arg101,arg102;
       input=Clientb.inputElt(null);
       arg10=List.ofArray([Default.Text("Log messages to the console")]);
       arg101=List.ofArray([Default.Attr().Class("form-group")]);
       arg102=List.ofArray([Default.Text("Message")]);
       return Operators.add(Default.Div(List.ofArray([Default.Attr().NewAttr("id","console-log")])),List.ofArray([Default.Tags().NewTag("legend",arg10),Operators.add(Default.Tags().NewTag("fieldset",arg101),List.ofArray([Default.Tags().NewTag("label",arg102),input])),Clientb.logBtn(input)]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Clientb.main();
      }
     })
    },
    Snippet3:{
     Client:{
      factFold:function(n)
      {
       return Arrays.fold(function(x)
       {
        return function(y)
        {
         return x*y;
        };
       },1,Seq.toArray(Operators1.range(1,n)));
      },
      factRec:function(n)
      {
       return n<2?1:n*Clientc.factRec(n-1);
      },
      main:function()
      {
       var input,recSpan,foldSpan,x,arg00,button;
       input=Default.Input(List.ofArray([Default.Attr().NewAttr("type","text"),HTML5.Attr().NewAttr("autofocus","autofocus"),Default.Attr().Class("form-control"),Default.Attr().NewAttr("id","factorial")]));
       recSpan=Default.Span(Runtime.New(T,{
        $:0
       }));
       foldSpan=Default.Span(Runtime.New(T,{
        $:0
       }));
       x=Default.Button(List.ofArray([Default.Text("Factorial"),Default.Attr().Class("btn btn-primary"),Default.Attr().NewAttr("style","margin-left: 8px;")]));
       arg00=function()
       {
        return function()
        {
         var v;
         v=input.get_Value()<<0;
         recSpan.set_Text("Recursion: "+Global.String(Clientc.factRec(v)));
         return foldSpan.set_Text("Array.fold: "+Global.String(Clientc.factFold(v)));
        };
       };
       EventsPervasives.Events().OnClick(arg00,x);
       button=x;
       return Default.Div(List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("form-inline")])),List.ofArray([input,button])),Operators.add(Default.Div(List.ofArray([Default.Attr().NewAttr("style","margin-top: 8px;")])),List.ofArray([recSpan,Default.Br(Runtime.New(T,{
        $:0
       })),foldSpan]))]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Clientc.main();
      }
     })
    },
    Snippet4:{
     Client:{
      main:function()
      {
       return Operators.add(Operators.add(Default.Table(List.ofArray([Default.Attr().Class("table table-bordered table-striped"),Default.Attr().NewAttr("style","width: 900px;")])),List.ofArray([Operators.add(Default.TR(Runtime.New(T,{
        $:0
       })),List.map(function(txt)
       {
        return Clientd.th(txt);
       },List.ofArray(["Level","Core","CSS","Events","HTML","Selectors-API"])))])),List.map(function(level)
       {
        return Clientd.tr(level);
       },List.ofArray(["1.0","2.0","3.0"])));
      },
      th:function(txt)
      {
       return Default.TH(List.ofArray([Default.Text(txt)]));
      },
      tr:function(level)
      {
       var implementation,tds;
       implementation=document.implementation;
       tds=List.map(function(feature)
       {
        return Default.TD(List.ofArray([Default.Text(Global.String(implementation.hasFeature(feature,level)))]));
       },List.ofArray(["Core","CSS","Events","HTML","Selectors-API"]));
       return Operators.add(Default.TR(List.ofArray([Clientd.th(level)])),tds);
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Clientd.main();
      }
     })
    },
    Snippet5:{
     Client:{
      btn:function(caption,action)
      {
       var x,arg00;
       x=Default.Button(List.ofArray([Default.Attr().Class("btn"),Default.Attr().NewAttr("style","margin: 3px; width: 45px;"),Default.Text(caption)]));
       arg00=function()
       {
        return function()
        {
         return action(null);
        };
       };
       EventsPervasives.Events().OnClick(arg00,x);
       return x;
      },
      main:function()
      {
       var patternInput,op,oldNum,num,display,updateDisplay,c,ac,n,e,o,digit;
       patternInput=[{
        contents:0
       },{
        contents:0
       },{
        contents:{
         $:0
        }
       }];
       op=patternInput[2];
       oldNum=patternInput[0];
       num=patternInput[1];
       display=Default.Input(List.ofArray([Default.Attr().NewAttr("type","text"),Default.Attr().NewAttr("value","0"),Default.Attr().Class("form-control"),Default.Attr().NewAttr("id","display")]));
       updateDisplay=function()
       {
        return display.set_Value(Global.String(num.contents));
       };
       c=function()
       {
        num.contents=0;
        return updateDisplay(null);
       };
       ac=function()
       {
        num.contents=0;
        oldNum.contents=0;
        op.contents={
         $:0
        };
        return updateDisplay(null);
       };
       n=function()
       {
        num.contents=-num.contents;
        return updateDisplay(null);
       };
       e=function()
       {
        var matchValue;
        matchValue=op.contents;
        if(matchValue.$==1)
         {
          num.contents=(matchValue.$0.call(null,oldNum.contents))(num.contents);
          op.contents={
           $:0
          };
          return updateDisplay(null);
         }
        else
         {
          return null;
         }
       };
       o=function(_op_)
       {
        return function()
        {
         var matchValue;
         matchValue=op.contents;
         if(matchValue.$==1)
          {
           num.contents=(matchValue.$0.call(null,oldNum.contents))(num.contents);
           updateDisplay(null);
          }
         oldNum.contents=num.contents;
         num.contents=0;
         op.contents={
          $:1,
          $0:_op_
         };
         return;
        };
       };
       digit=function(n1)
       {
        return Cliente.btn(Global.String(n1),function()
        {
         num.contents=10*num.contents+n1;
         return updateDisplay(null);
        });
       };
       return Default.Div(List.ofArray([display,Default.Br(Runtime.New(T,{
        $:0
       })),Default.Div(List.ofArray([digit(7),digit(8),digit(9),Cliente.btn("/",o(function(x)
       {
        return function(y)
        {
         return x/y>>0;
        };
       })),Default.Br(Runtime.New(T,{
        $:0
       })),digit(4),digit(5),digit(6),Cliente.btn("*",o(function(x)
       {
        return function(y)
        {
         return x*y;
        };
       })),Default.Br(Runtime.New(T,{
        $:0
       })),digit(1),digit(2),digit(3),Cliente.btn("-",o(function(x)
       {
        return function(y)
        {
         return x-y;
        };
       })),Default.Br(Runtime.New(T,{
        $:0
       })),digit(0),Cliente.btn("C",c),Cliente.btn("AC",ac),Cliente.btn("+",o(function(x)
       {
        return function(y)
        {
         return x+y;
        };
       })),Default.Br(Runtime.New(T,{
        $:0
       })),Cliente.btn("+/-",n),Cliente.btn("=",e)]))]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Cliente.main();
      }
     })
    },
    Snippet6:{
     Client:{
      accordionGroup:function(num)
      {
       var accordionBody,jq,x,arg00;
       accordionBody=Operators.add(Default.Div(List.ofArray([Default.Attr().NewAttr("style","display: none;")])),List.ofArray([Default.Div(List.ofArray([Default.Text(Clientf.loremIpsum())]))]));
       jq=jQuery(accordionBody.Body);
       x=Operators.add(Default.Div(List.ofArray([Default.Attr().Class("btn-link"),Default.Attr().NewAttr("style","font-weight: bold;")])),List.ofArray([Default.Text("Collapsible Group "+Global.String(num))]));
       arg00=function()
       {
        return function()
        {
         return jq.is(":visible")?jq.slideUp("fast",function()
         {
         }):jq.slideDown("fast",function()
         {
         });
        };
       };
       EventsPervasives.Events().OnClick(arg00,x);
       return Operators.add(Default.Div(List.ofArray([Default.Attr().NewAttr("style",Clientf.style())])),List.ofArray([Default.Div(List.ofArray([x])),accordionBody]));
      },
      loremIpsum:Runtime.Field(function()
      {
       return"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit lacus, commodo non posuere sit amet, sodales in risus. Donec et sagittis nisl, at blandit nisl. Cras fermentum libero et erat tincidunt, vel euismod justo elementum. Quisque eget augue quis arcu dictum sagittis. Duis in arcu vulputate lorem sagittis facilisis. In non justo quis metus aliquet luctus a id justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce vitae augue sagittis, sodales diam id, blandit turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor suscipit nibh vel mollis. Vestibulum eros lorem, pharetra quis varius in, lobortis at risus.";
      }),
      main:function()
      {
       return Operators.add(Default.Div(Runtime.New(T,{
        $:0
       })),List.map(function(num)
       {
        return Clientf.accordionGroup(num);
       },Seq.toList(Operators1.range(1,3))));
      },
      style:Runtime.Field(function()
      {
       return"border: 1px solid; border-radius: 5px; margin-bottom: 10px; padding: 3px; width: 900px;";
      })
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Clientf.main();
      }
     })
    },
    Snippet7:{
     Client:{
      main:function()
      {
       var output,input,x,arg00;
       output=Default.Div(List.ofArray([Default.Attr().NewAttr("style","margin-top: 8px;")]));
       input=Default.Input(List.ofArray([Default.Attr().NewAttr("type","text"),HTML5.Attr().NewAttr("autofocus","autofocus"),Default.Attr().Class("form-control"),Default.Attr().NewAttr("id","display")]));
       x=Default.Button(List.ofArray([Default.Text("MD5"),Default.Attr().Class("btn btn-primary"),Default.Attr().NewAttr("style","margin-left: 8px;")]));
       arg00=function()
       {
        return function()
        {
         return Concurrency.Start(Concurrency.Delay(function()
         {
          return Concurrency.Bind(Remoting.Async("Sitelet:0",[input.get_Value()]),function(arg101)
          {
           output.set_Text(arg101);
           return Concurrency.Return(null);
          });
         }));
        };
       };
       EventsPervasives.Events().OnClick(arg00,x);
       return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("form-inline")])),List.ofArray([input,x,output]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client10.main();
      }
     })
    },
    Snippet8:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return JS2.main();
      }
     }),
     JS:{
      handleDragStart:function(idRef,elt)
      {
       return elt.Body.addEventListener("dragstart",function()
       {
        idRef.contents=elt.get_Id();
       },false);
      },
      handleDragging:function(elt,idRef)
      {
       var dom;
       dom=elt.Body;
       dom.addEventListener("dragenter",function(e)
       {
        e.preventDefault();
        elt["HtmlProvider@32"].SetCss(elt.Body,"background-color","lightgray");
        return elt["HtmlProvider@32"].SetCss(elt.Body,"border","dotted");
       },false);
       dom.addEventListener("dragleave",function(e)
       {
        e.preventDefault();
        elt["HtmlProvider@32"].SetCss(elt.Body,"background-color","white");
        return elt["HtmlProvider@32"].SetCss(elt.Body,"border","solid");
       },false);
       dom.addEventListener("dragover",function(e)
       {
        return e.preventDefault();
       },false);
       return dom.addEventListener("drop",function(e)
       {
        var nodeClone;
        e.preventDefault();
        nodeClone=document.getElementById(idRef.contents).cloneNode(false);
        elt.set_Html("");
        elt.AppendN(nodeClone);
        elt["HtmlProvider@32"].SetCss(elt.Body,"background-color","white");
        return elt["HtmlProvider@32"].SetCss(elt.Body,"border","black solid");
       },false);
      },
      img:function(x)
      {
       var arg10,arg101;
       arg10="cat-"+x;
       arg101="/Images/cat"+x+".jpg";
       return Default.Img(List.ofArray([Default.Attr().Class("cat-img"),Default.Attr().NewAttr("id",arg10),Default.Attr().NewAttr("src",arg101),HTML5.Attr().NewAttr("draggable","true")]));
      },
      imgDiv:function(img)
      {
       return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("col-lg-3 cat-img-div"),Default.Attr().NewAttr("style","width: auto;")])),List.ofArray([img]));
      },
      main:function()
      {
       var patternInput,img3,img2,img1,idRef,src,target;
       patternInput=[{
        contents:""
       },JS2.img("1"),JS2.img("2"),JS2.img("3")];
       img3=patternInput[3];
       img2=patternInput[2];
       img1=patternInput[1];
       idRef=patternInput[0];
       src=Operators.add(Default.Div(List.ofArray([Default.Attr().Class("row"),Default.Attr().NewAttr("id","src")])),List.ofArray([JS2.imgDiv(img1),JS2.imgDiv(img2),JS2.imgDiv(img3)]));
       target=Operators.add(Default.Div(List.ofArray([Default.Attr().NewAttr("id","target")])),List.ofArray([Operators.add(Default.P(List.ofArray([Default.Attr().Class("text-center"),Default.Attr().NewAttr("id","target-text")])),List.ofArray([Default.Text("Drop image here")]))]));
       Seq.iter(function(elt)
       {
        return JS2.handleDragStart(idRef,elt);
       },List.ofArray([img1,img2,img3]));
       JS2.handleDragging(target,idRef);
       return Default.Div(List.ofArray([src,target]));
      }
     }
    },
    Snippet9:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return JS3.main();
      }
     }),
     JS:{
      clearBtn:function()
      {
       return Operators.add(Default.Button(List.ofArray([Default.Attr().Class("btn btn-lg btn-warning"),Default.Attr().NewAttr("id","clear-btn"),Default.Attr().NewAttr("type","button")])),List.ofArray([Default.Text("Clear Timeout")]));
      },
      clearTimeout:function(btn,handle)
      {
       var arg00;
       arg00=function(elt)
       {
        return function()
        {
         elt["HtmlProvider@32"].Remove(elt.Body);
         clearTimeout(handle);
         return document.getElementById("set-btn").removeAttribute("disabled");
        };
       };
       EventsPervasives.Events().OnClick(arg00,btn);
       return;
      },
      main:function()
      {
       var btnsDiv,x,arg00;
       btnsDiv=Default.Div(Runtime.New(T,{
        $:0
       }));
       x=Operators.add(Default.Button(List.ofArray([Default.Attr().Class("btn btn-lg btn-primary"),Default.Attr().NewAttr("id","set-btn"),Default.Attr().NewAttr("type","button")])),List.ofArray([Default.Text("Set Timeout")]));
       arg00=function(elt)
       {
        return function()
        {
         var btn;
         elt["HtmlProvider@32"].SetAttribute(elt.Body,"disabled","disabled");
         btn=JS3.clearBtn();
         JS3.clearTimeout(btn,JS3.timerHandle(btn));
         return btnsDiv.AppendI(btn);
        };
       };
       EventsPervasives.Events().OnClick(arg00,x);
       return Operators.add(btnsDiv,List.ofArray([x]));
      },
      timerHandle:function(btn)
      {
       return setTimeout(function()
       {
        btn["HtmlProvider@32"].Remove(btn.Body);
        document.getElementById("set-btn").removeAttribute("disabled");
        return alert("Timeout Expired");
       },3000);
      }
     }
    }
   },
   Login:{
    Client:{
     form:function(redirectUrl)
     {
      return Piglet1.Render(function(name)
      {
       return function(password)
       {
        return function(submit)
        {
         return Client11.loginRender(name,password,submit);
        };
       };
      },Piglet1.Run(function(loginInfo)
      {
       return Concurrency.Start(Concurrency.Delay(function()
       {
        return Concurrency.Bind(Remoting.Async("Sitelet:2",[loginInfo]),function(arg101)
        {
         if(arg101.$==1)
          {
           window.location.assign(redirectUrl);
           return Concurrency.Return(null);
          }
         else
          {
           alert("Login failed");
           return Concurrency.Return(null);
          }
        });
       }));
      },Client11.loginPiglet({
       Username:"",
       Password:""
      })));
     },
     loginPiglet:function(init)
     {
      return Piglet1.WithSubmit(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Piglet1.Return(function(username)
      {
       return function(password)
       {
        return{
         Username:username,
         Password:password
        };
       };
      }),Validation.Is(function(value)
      {
       return Validation.NotEmpty(value);
      },"Please enter your username.",Piglet1.Yield(init.Username))),Validation.Is(function(value)
      {
       return Validation.NotEmpty(value);
      },"Please enter your password.",Piglet1.Yield(init.Password))));
     },
     loginRender:function(name,password,submit)
     {
      var x1,arg00;
      x1=Operators.add(Controls.input("text",function(x)
      {
       return x;
      },function(x)
      {
       return x;
      },password),List.ofArray([Default.Attr().Class("form-control"),Default.Attr().NewAttr("type","password"),HTML5.Attr().NewAttr("placeholder","Password")]));
      arg00=function()
      {
       return function(keyCode)
       {
        return keyCode.KeyCode===13?jQuery("#submit-btn").click():null;
       };
      };
      EventsPervasives.Events().OnKeyDown(arg00,x1);
      return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("well"),Default.Attr().NewAttr("id","login-form")])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("form-group")])),List.ofArray([Operators.add(Controls.input("text",function(x)
      {
       return x;
      },function(x)
      {
       return x;
      },name),List.ofArray([Default.Attr().Class("form-control"),Default.Attr().NewAttr("type","text"),HTML5.Attr().NewAttr("autofocus","autofocus"),HTML5.Attr().NewAttr("required","required"),HTML5.Attr().NewAttr("placeholder","Username")]))])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("form-group")])),List.ofArray([x1])),Operators.add(Controls.SubmitValidate(submit),List.ofArray([Default.Attr().Class("btn btn-primary"),Default.Attr().NewAttr("id","submit-btn")]))]));
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Client11.form(this.redirectUrl);
     }
    })
   },
   NewSnippet:{
    Client:{
     Button:function(writer)
     {
      var x,arg00;
      x=Default.Button(Runtime.New(T,{
       $:0
      }));
      arg00=function()
      {
       return function()
       {
        return writer.Trigger(Runtime.New(Result,{
         $:0,
         $0:""
        }));
       };
      };
      EventsPervasives.Events().OnClick(arg00,x);
      return x;
     },
     form:Runtime.Field(function()
     {
      return Piglet1.Render(function(id)
      {
       return function(title)
       {
        return function(url)
        {
         return function(metaDescription)
         {
          return function(description)
          {
           return function(descriptionHtml)
           {
            return function(tags)
            {
             return function(submit)
             {
              return Client12.snippetView(id,title,url,metaDescription,description,descriptionHtml,tags,submit);
             };
            };
           };
          };
         };
        };
       };
      },Piglet1.Run(function(snippet)
      {
       return Concurrency.Start(Concurrency.Delay(function()
       {
        return Concurrency.Bind(Remoting.Async("Sitelet:3",[snippet]),function()
        {
         alert("Done");
         return Concurrency.Return(null);
        });
       }));
      },Client12.snippetPiglet({
       Id:"",
       Title:"",
       Url:"",
       MetaDescription:"",
       Description:"",
       DescriptionHtml:"",
       Tags:[""]
      })));
     }),
     snippetPiglet:function(init)
     {
      return Piglet1.WithSubmit(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Piglet1.Return(function(id)
      {
       return function(title)
       {
        return function(url)
        {
         return function(metaDescription)
         {
          return function(description)
          {
           return function(descriptionHtml)
           {
            return function(tags)
            {
             return{
              Id:id,
              Title:title,
              Url:url,
              MetaDescription:metaDescription,
              Description:description,
              DescriptionHtml:descriptionHtml,
              Tags:tags
             };
            };
           };
          };
         };
        };
       };
      }),Piglet1.Yield(init.Id)),Piglet1.Yield(init.Title)),Piglet1.Yield(init.Url)),Piglet1.Yield(init.MetaDescription)),Piglet1.Yield(init.Description)),Piglet1.Yield(init.DescriptionHtml)),Piglet1.ManyInit(init.Tags,"",function(init1)
      {
       return Client12.tagPiglet(init1);
      })));
     },
     snippetView:function(id,title,url,metaDescription,description,descriptionHtml,tags,submit)
     {
      return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("well col-md-4")])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("form-group")])),List.ofArray([Operators.add(Controls.input("text",function(x)
      {
       return x;
      },function(x)
      {
       return x;
      },id),List.ofArray([Default.Attr().Class("form-control"),Default.Attr().NewAttr("type","text"),HTML5.Attr().NewAttr("autofocus","autofocus"),HTML5.Attr().NewAttr("placeholder","Id")]))])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("form-group")])),List.ofArray([Operators.add(Controls.input("text",function(x)
      {
       return x;
      },function(x)
      {
       return x;
      },title),List.ofArray([Default.Attr().Class("form-control"),Default.Attr().NewAttr("type","text"),HTML5.Attr().NewAttr("placeholder","Title")]))])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("form-group")])),List.ofArray([Operators.add(Controls.input("text",function(x)
      {
       return x;
      },function(x)
      {
       return x;
      },url),List.ofArray([Default.Attr().Class("form-control"),Default.Attr().NewAttr("type","text"),HTML5.Attr().NewAttr("placeholder","Url")]))])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("form-group")])),List.ofArray([Operators.add(Controls.TextArea(metaDescription),List.ofArray([Default.Attr().Class("form-control"),Default.Attr().NewAttr("type","text"),HTML5.Attr().NewAttr("placeholder","Meta Description")]))])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("form-group")])),List.ofArray([Operators.add(Controls.TextArea(description),List.ofArray([Default.Attr().Class("form-control"),Default.Attr().NewAttr("type","text"),HTML5.Attr().NewAttr("placeholder","Description")]))])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("form-group")])),List.ofArray([Operators.add(Controls.TextArea(descriptionHtml),List.ofArray([Default.Attr().Class("form-control"),Default.Attr().NewAttr("type","text"),HTML5.Attr().NewAttr("placeholder","Description HTML")]))])),Controls.RenderMany(tags,function()
      {
       return function(tag)
       {
        return Client12.tagView(tag);
       };
      },Default.Div(Runtime.New(T,{
       $:0
      }))),Default.Div(List.ofArray([Operators.add(Client12.Button(tags.get_Add()),List.ofArray([Default.Text("New Tag"),Default.Attr().Class("btn btn-default")])),Operators.add(Controls.SubmitValidate(submit),List.ofArray([Default.Attr().Class("btn btn-primary"),Default.Attr().NewAttr("id","submit-btn")]))]))]));
     },
     tagPiglet:function(init)
     {
      return Pervasives.op_LessMultiplyGreater(Piglet1.Return(function(x)
      {
       return x;
      }),Piglet1.Yield(init));
     },
     tagView:function(tag)
     {
      return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("form-group")])),List.ofArray([Operators.add(Controls.input("text",function(x)
      {
       return x;
      },function(x)
      {
       return x;
      },tag),List.ofArray([Default.Attr().Class("form-control"),Default.Attr().NewAttr("type","text"),HTML5.Attr().NewAttr("placeholder","Tag")]))]));
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Client12.form();
     }
    })
   },
   Search:{
    Client:{
     main:function()
     {
      return Piglet1.Render(function(queryString)
      {
       return function(submit)
       {
        return Client13.view(queryString,submit);
       };
      },Piglet1.Run(function(queryString)
      {
       return window.location.assign("/search/"+Global.encodeURIComponent(queryString)+"/1");
      },Client13.queryPiglet("")));
     },
     queryPiglet:function(init)
     {
      return Piglet1.WithSubmit(Validation.Is(function(value)
      {
       return Validation.NotEmpty(value);
      },"Please enter a search query.",Pervasives.op_LessMultiplyGreater(Piglet1.Return(function(x)
      {
       return x;
      }),Piglet1.Yield(init))));
     },
     view:function(queryString,submit)
     {
      var x,arg00;
      x=Operators.add(Controls.input("text",function(x1)
      {
       return x1;
      },function(x1)
      {
       return x1;
      },queryString),List.ofArray([Default.Attr().Class("form-control"),Default.Attr().NewAttr("id","query"),Default.Attr().NewAttr("type","text"),HTML5.Attr().NewAttr("autofocus","autofocus")]));
      arg00=function()
      {
       return function(key)
       {
        if(key.KeyCode===13)
         {
          jQuery("#query").blur();
          return jQuery("#search-btn").click();
         }
        else
         {
          return null;
         }
       };
      };
      EventsPervasives.Events().OnKeyUp(arg00,x);
      return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("input-group input-group-lg col-md-6 col-md-offset-3")])),List.ofArray([x,Operators.add(Default.Span(List.ofArray([Default.Attr().Class("input-group-btn")])),List.ofArray([Operators.add(Controls.SubmitValidate(submit),List.ofArray([Default.Attr().Class("btn btn-primary"),Default.Attr().NewAttr("id","search-btn"),Default.Attr().NewAttr("value","Search"),HTML5.Attr().NewAttr("data-"+"loading-text","Please wait...")]))]))]));
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Client13.main();
     }
    })
   },
   Twitter:{
    Snippet1:{
     Client:{
      handleTweetActions:function()
      {
       return jQuery("a.tweet-action").click(function(event)
       {
        event.preventDefault();
        window.showModalDialog(this.getAttribute("href"));
        return;
       });
      },
      li:function(tweet)
      {
       var id,name,screenName,profileLink,replyLink,retweetLink,favoriteLink,p,arg10,arg101;
       id=tweet.Id;
       name=tweet.Name;
       screenName=tweet.ScreenName;
       profileLink="https://twitter.com/"+screenName;
       replyLink="https://twitter.com/intent/tweet?in_reply_to="+id;
       retweetLink="https://twitter.com/intent/retweet?tweet_id="+id;
       favoriteLink="https://twitter.com/intent/favorite?tweet_id="+id;
       p=Default.P(Runtime.New(T,{
        $:0
       }));
       p.set_Html(tweet.Html);
       arg10=List.ofArray([Default.Text(name)]);
       arg101=List.ofArray([Default.Text(tweet.Date)]);
       return Operators.add(Default.LI(List.ofArray([Default.Attr().Class("list-group-item")])),List.ofArray([Default.Div(List.ofArray([Operators.add(Operators.add(Default.A(List.ofArray([Default.HRef(profileLink),Default.Attr().Class("profile-link"),Default.Attr().NewAttr("target","_blank")])),List.ofArray([Default.Img(List.ofArray([Default.Src(tweet.Avatar),Default.Alt(name),Default.Attr().Class("avatar")])),Default.Tags().NewTag("strong",arg10)])),List.ofArray([Default.Text(" @"+screenName)])),Default.Br(Runtime.New(T,{
        $:0
       })),Default.Tags().NewTag("small",arg101),p,Operators.add(Default.Div(List.ofArray([Default.Attr().Class("tweet-actions")])),List.ofArray([Operators.add(Default.A(List.ofArray([Default.HRef(replyLink),Default.Attr().Class("tweet-action"),Default.Attr().NewAttr("style","margin-right: 5px;")])),List.ofArray([Default.Text("Reply")])),Operators.add(Default.A(List.ofArray([Default.HRef(retweetLink),Default.Attr().Class("tweet-action"),Default.Attr().NewAttr("style","margin-right: 5px;")])),List.ofArray([Default.Text("Retweet")])),Operators.add(Default.A(List.ofArray([Default.HRef(favoriteLink),Default.Attr().Class("tweet-action")])),List.ofArray([Default.Text("Favorite")]))]))]))]));
      },
      main:function()
      {
       var x;
       x=Default.Div(List.ofArray([Default.Attr().NewAttr("id","tweets")]));
       Operators.OnAfterRender(function(elt)
       {
        return Concurrency.Start(Concurrency.Delay(function()
        {
         var x1;
         x1=Remoting.Async("Sitelet:1",[]);
         return Concurrency.Bind(x1,function(arg101)
         {
          var tweets,ul;
          if(arg101.$==1)
           {
            tweets=arg101.$0;
            ul=Default.UL(List.ofArray([Default.Attr().Class("list-group"),Default.Attr().NewAttr("id","tweets-ul")]));
            Seq.iter(function(tweet)
            {
             return ul.AppendI(Client14.li(tweet));
            },tweets);
            elt.AppendI(ul);
            Client14.toggleActionsVisibility();
            Client14.handleTweetActions();
            return Concurrency.Return(null);
           }
          else
           {
            alert("Failed to fetch the latest tweets.");
            return Concurrency.Return(null);
           }
         });
        }));
       },x);
       return x;
      },
      toggleActionsVisibility:function()
      {
       var jquery;
       jquery=jQuery(".list-group-item");
       jquery.mouseenter(function()
       {
        return jQuery(".tweet-actions",this).css("visibility","visible");
       });
       return jquery.mouseleave(function()
       {
        return jQuery(".tweet-actions",this).css("visibility","hidden");
       });
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client14.main();
      }
     })
    }
   }
  }
 });
 Runtime.OnInit(function()
 {
  Sitelet=Runtime.Safe(Global.Sitelet);
  Geolocation=Runtime.Safe(Sitelet.Geolocation);
  Snippet1=Runtime.Safe(Geolocation.Snippet1);
  Client=Runtime.Safe(Snippet1.Client);
  String=Runtime.Safe(Global.String);
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Concurrency=Runtime.Safe(WebSharper.Concurrency);
  window=Runtime.Safe(Global.window);
  Html=Runtime.Safe(WebSharper.Html);
  Default=Runtime.Safe(Html.Default);
  List=Runtime.Safe(WebSharper.List);
  Operators=Runtime.Safe(Html.Operators);
  EventsPervasives=Runtime.Safe(Html.EventsPervasives);
  document=Runtime.Safe(Global.document);
  google=Runtime.Safe(Global.google);
  visualization=Runtime.Safe(google.visualization);
  DataTable=Runtime.Safe(visualization.DataTable);
  Google=Runtime.Safe(Sitelet.Google);
  Snippet11=Runtime.Safe(Google.Snippet1);
  Client1=Runtime.Safe(Snippet11.Client);
  LineChart=Runtime.Safe(visualization.LineChart);
  Seq=Runtime.Safe(WebSharper.Seq);
  Snippet2=Runtime.Safe(Google.Snippet2);
  Client2=Runtime.Safe(Snippet2.Client);
  PieChart=Runtime.Safe(visualization.PieChart);
  Snippet3=Runtime.Safe(Google.Snippet3);
  Html5=Runtime.Safe(Sitelet.Html5);
  Snippet12=Runtime.Safe(Html5.Snippet1);
  Client3=Runtime.Safe(Snippet12.Client);
  HTML5=Runtime.Safe(Default.HTML5);
  T=Runtime.Safe(List.T);
  Snippet10=Runtime.Safe(Html5.Snippet10);
  JS=Runtime.Safe(Snippet10.JS);
  Snippet121=Runtime.Safe(Html5.Snippet12);
  Client4=Runtime.Safe(Snippet121.Client);
  Snippet14=Runtime.Safe(Html5.Snippet14);
  Snippet21=Runtime.Safe(Html5.Snippet2);
  Client5=Runtime.Safe(Snippet21.Client);
  Snippet31=Runtime.Safe(Html5.Snippet3);
  Client6=Runtime.Safe(Snippet31.Client);
  WebSocket=Runtime.Safe(Global.WebSocket);
  Snippet4=Runtime.Safe(Html5.Snippet4);
  Client7=Runtime.Safe(Snippet4.Client);
  Snippet5=Runtime.Safe(Html5.Snippet5);
  Client8=Runtime.Safe(Snippet5.Client);
  Snippet6=Runtime.Safe(Html5.Snippet6);
  Client9=Runtime.Safe(Snippet6.Client);
  Date=Runtime.Safe(Global.Date);
  Math=Runtime.Safe(Global.Math);
  Number=Runtime.Safe(Global.Number);
  Snippet7=Runtime.Safe(Html5.Snippet7);
  Clienta=Runtime.Safe(Snippet7.Client);
  Snippet8=Runtime.Safe(Html5.Snippet8);
  Snippet9=Runtime.Safe(Html5.Snippet9);
  JQuery=Runtime.Safe(Sitelet.JQuery);
  Snippet13=Runtime.Safe(JQuery.Snippet1);
  Js=Runtime.Safe(Snippet13.Js);
  Operators1=Runtime.Safe(WebSharper.Operators);
  jQuery=Runtime.Safe(Global.jQuery);
  setInterval=Runtime.Safe(Global.setInterval);
  clearInterval=Runtime.Safe(Global.clearInterval);
  JQueryUI=Runtime.Safe(Sitelet.JQueryUI);
  Snippet15=Runtime.Safe(JQueryUI.Snippet1);
  JS1=Runtime.Safe(Snippet15.JS);
  JQueryUI1=Runtime.Safe(WebSharper.JQueryUI);
  Tabs=Runtime.Safe(JQueryUI1.Tabs);
  Datepicker=Runtime.Safe(JQueryUI1.Datepicker);
  JavaScript=Runtime.Safe(WebSharper.JavaScript);
  Js1=Runtime.Safe(Sitelet.Js);
  Snippet22=Runtime.Safe(Js1.Snippet2);
  Clientb=Runtime.Safe(Snippet22.Client);
  Arrays=Runtime.Safe(WebSharper.Arrays);
  Snippet32=Runtime.Safe(Js1.Snippet3);
  Clientc=Runtime.Safe(Snippet32.Client);
  Snippet41=Runtime.Safe(Js1.Snippet4);
  Clientd=Runtime.Safe(Snippet41.Client);
  Snippet51=Runtime.Safe(Js1.Snippet5);
  Cliente=Runtime.Safe(Snippet51.Client);
  Snippet61=Runtime.Safe(Js1.Snippet6);
  Clientf=Runtime.Safe(Snippet61.Client);
  Remoting=Runtime.Safe(WebSharper.Remoting);
  Snippet71=Runtime.Safe(Js1.Snippet7);
  Client10=Runtime.Safe(Snippet71.Client);
  Snippet81=Runtime.Safe(Js1.Snippet8);
  JS2=Runtime.Safe(Snippet81.JS);
  Snippet91=Runtime.Safe(Js1.Snippet9);
  JS3=Runtime.Safe(Snippet91.JS);
  clearTimeout=Runtime.Safe(Global.clearTimeout);
  setTimeout=Runtime.Safe(Global.setTimeout);
  alert=Runtime.Safe(Global.alert);
  Piglets=Runtime.Safe(WebSharper.Piglets);
  Piglet1=Runtime.Safe(Piglets.Piglet1);
  Login=Runtime.Safe(Sitelet.Login);
  Client11=Runtime.Safe(Login.Client);
  Pervasives=Runtime.Safe(Piglets.Pervasives);
  Validation=Runtime.Safe(Piglet1.Validation);
  Controls=Runtime.Safe(Piglets.Controls);
  Result=Runtime.Safe(Piglets.Result);
  NewSnippet=Runtime.Safe(Sitelet.NewSnippet);
  Client12=Runtime.Safe(NewSnippet.Client);
  Search=Runtime.Safe(Sitelet.Search);
  Client13=Runtime.Safe(Search.Client);
  Twitter=Runtime.Safe(Sitelet.Twitter);
  Snippet16=Runtime.Safe(Twitter.Snippet1);
  return Client14=Runtime.Safe(Snippet16.Client);
 });
 Runtime.OnLoad(function()
 {
  Client12.form();
  Clientf.style();
  Clientf.loremIpsum();
  Js.baseUrl();
  Client2.data();
  return;
 });
}());
