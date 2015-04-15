(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,Sitelet,Geolocation,Snippet1,Client,String,window,Concurrency,List,Html,Client1,Tags,Operators,Attr,EventsPervasives,document,google,visualization,DataTable,Google,Snippet11,Client2,LineChart,Seq,Snippet2,Client3,PieChart,Snippet3,Html5,Snippet12,Client4,T,Snippet10,JS,Snippet121,Client5,Snippet14,Snippet21,Client6,Snippet31,Client7,WebSocket,Snippet4,Client8,Snippet5,Client9,Snippet6,Clienta,Date,Math,Number,Snippet7,Clientb,Snippet8,Snippet9,JQuery,Snippet13,Js,Operators1,jQuery,setInterval,clearInterval,JQueryUI,Snippet15,JS1,JQueryUI1,Tabs,Datepicker,console,Js1,Snippet22,Clientc,Arrays,Snippet32,Clientd,Snippet41,Cliente,Snippet51,Clientf,Snippet61,Client10,Remoting,AjaxRemotingProvider,Snippet71,Client11,Snippet81,JS2,Snippet91,JS3,clearTimeout,setTimeout,alert,Login,Client12,Piglets,Piglet,Pervasives,Validation,Controls,Result,NewSnippet,Client13,Search,Client14,Twitter,Snippet16,Client15;
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
       return Client.setText("timestamp",String(p.timestamp));
      },
      getPosition:function()
      {
       var f;
       f=function()
       {
        window.navigator.geolocation.getCurrentPosition(function(p)
        {
         return Client.display(p);
        });
        return Concurrency.Return(null);
       };
       return Concurrency.Delay(f);
      },
      main:function()
      {
       var x,_this,x1,x2,_this1,_this2,x3,_this3,_this4,_this5,x4,_this6,_this7,x5,x6,_this8;
       _this=Tags.Tags();
       x1=List.ofArray([Tags.Tags().text("td {width: 200px;}")]);
       _this1=Attr.Attr();
       x2=List.ofArray([_this1.NewAttr("class","table-responsive")]);
       _this2=Tags.Tags();
       _this3=Attr.Attr();
       _this4=Attr.Attr();
       x3=List.ofArray([_this3.NewAttr("class","table table-bordered"),_this4.NewAttr("id","geolocation-table")]);
       _this5=Tags.Tags();
       _this6=Attr.Attr();
       x4=List.ofArray([Tags.Tags().text("Track My Location"),_this6.NewAttr("class","btn btn-primary")]);
       _this7=Tags.Tags();
       x5=_this7.NewTag("button",x4);
       x6=function()
       {
        return function()
        {
         var f,arg00,t;
         f=function()
         {
          var x7,f1;
          x7=Client.getPosition();
          f1=function()
          {
           return Concurrency.Return(null);
          };
          return Concurrency.Bind(x7,f1);
         };
         arg00=Concurrency.Delay(f);
         t={
          $:0
         };
         return Concurrency.Start(arg00,t);
        };
       };
       EventsPervasives.Events().OnClick(x6,x5);
       x=List.ofArray([_this.NewTag("style",x1),Operators.add(_this2.NewTag("div",x2),List.ofArray([Operators.add(_this5.NewTag("table",x3),List.ofArray([Client.tr("Longitude","longitude"),Client.tr("Latitude","latitude"),Client.tr("Altitude","altitude"),Client.tr("Accuracy","accuracy"),Client.tr("Altitude Accuracy","alt-acc"),Client.tr("Heading","heading"),Client.tr("Speed","speed"),Client.tr("Time Stamp","timestamp")]))])),x5]);
       _this8=Tags.Tags();
       return _this8.NewTag("div",x);
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
       var x,x1,_this,x2,_this1,_this2,_this3;
       x1=List.ofArray([Tags.Tags().text(thTxt)]);
       _this=Tags.Tags();
       _this1=Attr.Attr();
       x2=List.ofArray([_this1.NewAttr("id",tdId)]);
       _this2=Tags.Tags();
       x=List.ofArray([_this.NewTag("th",x1),_this2.NewTag("td",x2)]);
       _this3=Tags.Tags();
       return _this3.NewTag("tr",x);
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
       var options,dataTable,data,x,_this,_this1,x1;
       options={
        title:"Company Performance"
       };
       dataTable=new DataTable();
       dataTable.addColumn("string","Year");
       dataTable.addColumn("number","Sales");
       dataTable.addColumn("number","Expenses");
       dataTable.addRows(4);
       Client2.setCell(dataTable,0,0,"2004");
       Client2.setCell(dataTable,1,0,"2005");
       Client2.setCell(dataTable,2,0,"2006");
       Client2.setCell(dataTable,3,0,"2007");
       Client2.setCell(dataTable,0,1,1000);
       Client2.setCell(dataTable,1,1,1170);
       Client2.setCell(dataTable,2,1,660);
       Client2.setCell(dataTable,3,1,1030);
       Client2.setCell(dataTable,0,2,400);
       Client2.setCell(dataTable,1,2,460);
       Client2.setCell(dataTable,2,2,1120);
       Client2.setCell(dataTable,3,2,540);
       data=dataTable;
       _this=Attr.Attr();
       x=List.ofArray([_this.NewAttr("style","width: 900px; height: 500px;")]);
       _this1=Tags.Tags();
       x1=_this1.NewTag("div",x);
       Operators.OnAfterRender(function(elt)
       {
        return(new LineChart(elt.Dom)).draw(data,options);
       },x1);
       return x1;
      },
      setCell:function(dataTable,row,column,value)
      {
       dataTable.setCell(row,column,value);
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client2.main();
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
       var dataTable,f;
       dataTable=new DataTable();
       dataTable.addColumn("string","Resource");
       dataTable.addColumn("number","Size");
       dataTable.addRows(5);
       f=function(idx)
       {
        return function(tupledArg)
        {
         var y;
         y=tupledArg[1];
         dataTable.setCell(idx,0,tupledArg[0]);
         return dataTable.setCell(idx,1,y);
        };
       };
       Seq.iteri(f,data);
       return dataTable;
      },
      main:function()
      {
       var x,_this,_this1,x1;
       _this=Attr.Attr();
       x=List.ofArray([_this.NewAttr("style","width: 900px; height: 500px;")]);
       _this1=Tags.Tags();
       x1=_this1.NewTag("div",x);
       Operators.OnAfterRender(function(elt)
       {
        return Client3.pie(Client3.data(),elt.Dom);
       },x1);
       return x1;
      },
      pie:function(data,dom)
      {
       var dt,options;
       dt=Client3.dataTable(data);
       options={};
       options.title="Resources Breakdown";
       return(new PieChart(dom)).draw(dt,options);
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client3.main();
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
      var x,_this,_this1,x1;
      _this=Attr.Attr();
      x=List.ofArray([_this.NewAttr("id","map")]);
      _this1=Tags.Tags();
      x1=_this1.NewTag("div",x);
      Operators.OnAfterRender(function(elt)
      {
       new google.maps.Map(elt.Dom,{
        center:new google.maps.LatLng(21.427378,39.814838),
        zoom:4
       });
      },x1);
      return x1;
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
       Client4.drawShape(ctx,"#E34C26",44,255,List.ofArray([[22,5],[267,5],[244,255],[144,283]]));
       Client4.drawShape(ctx,"#F06529",144,262,List.ofArray([[225,239],[244,25],[144,25]]));
       Client4.drawShape(ctx,"#EBEBEB",144,118,List.ofArray([[103,118],[101,87],[144,87],[144,56],[67,56],[75,149],[144,149]]));
       Client4.drawShape(ctx,"#EBEBEB",144,198,List.ofArray([[110,189],[108,164],[77,164],[81,212],[144,230]]));
       Client4.drawShape(ctx,"#FFFFFF",144,118,List.ofArray([[144,149],[182,149],[178,189],[144,198],[144,230],[207,212],[215,118]]));
       return Client4.drawShape(ctx,"#FFFFFF",144,56,List.ofArray([[144,87],[218,87],[221,56]]));
      },
      drawShape:function(_,_1,_2,_3,_4)
      {
       var moveTo,f;
       moveTo=[_2,_3];
       _.fillStyle=_1;
       _.beginPath();
       _.moveTo(moveTo[0],moveTo[1]);
       f=function(tupledArg)
       {
        return _.lineTo(tupledArg[0],tupledArg[1]);
       };
       Seq.iter(f,_4);
       _.closePath();
       return _.fill();
      },
      main:function()
      {
       var x,_this,elt,canvas;
       x=Runtime.New(T,{
        $:0
       });
       _this=Tags.Tags();
       elt=_this.NewTag("canvas",x);
       canvas=elt.Dom;
       canvas.height=400;
       canvas.width=600;
       Client4.drawLogo(canvas.getContext("2d"));
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
       var options,x,_this,_this1,x1,_this2,_this3,_this4,x2,_this5,_this6,el,inner,x3,x4;
       options={
        enableHighAccuracy:true,
        maximumAge:60000,
        timeout:10000
       };
       _this=Attr.Attr();
       x=List.ofArray([_this.NewAttr("class","table-responsive")]);
       _this1=Tags.Tags();
       _this2=Attr.Attr();
       _this3=Attr.Attr();
       x1=List.ofArray([_this2.NewAttr("class","table table-bordered"),_this3.NewAttr("id","geolocation-table")]);
       _this4=Tags.Tags();
       _this5=Attr.Attr();
       x2=List.ofArray([_this5.NewAttr("class","btn btn-primary btn-large")]);
       _this6=Tags.Tags();
       el=_this6.NewTag("button",x2);
       inner=Tags.Tags().text("Track My Location");
       x3=Operators.add(el,List.ofArray([inner]));
       x4=function()
       {
        return function()
        {
         var f,arg00,t;
         f=function()
         {
          var f1,x5,f2;
          f1=function()
          {
           window.navigator.geolocation.getCurrentPosition(function(p)
           {
            return JS.displayPosition(p);
           },function()
           {
            return null;
           },options);
           return Concurrency.Return(null);
          };
          x5=Concurrency.Delay(f1);
          f2=function()
          {
           return Concurrency.Return(null);
          };
          return Concurrency.Bind(x5,f2);
         };
         arg00=Concurrency.Delay(f);
         t={
          $:0
         };
         return Concurrency.Start(arg00,t);
        };
       };
       EventsPervasives.Events().OnClick(x4,x3);
       return Operators.add(_this1.NewTag("div",x),List.ofArray([Operators.add(_this4.NewTag("table",x1),List.ofArray([JS.tr("Longitude","longitude"),JS.tr("Latitude","latitude"),JS.tr("Altitude","altitude"),JS.tr("Accuracy","accuracy"),JS.tr("Altitude Accuracy","alt-acc"),JS.tr("Heading","heading"),JS.tr("Speed","speed"),JS.tr("Time Stamp","timestamp")])),x3]));
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
       var x,x1,_this,x2,_this1,_this2,_this3,_this4;
       x1=List.ofArray([Tags.Tags().text(thTxt)]);
       _this=Tags.Tags();
       _this1=Attr.Attr();
       _this2=Attr.Attr();
       x2=List.ofArray([_this1.NewAttr("id",tdId),_this2.NewAttr("style","width: 250px;")]);
       _this3=Tags.Tags();
       x=List.ofArray([_this.NewTag("th",x1),_this3.NewTag("td",x2)]);
       _this4=Tags.Tags();
       return _this4.NewTag("tr",x);
      }
     }
    },
    Snippet11:{
     Control:Runtime.Class({
      get_Body:function()
      {
       var x,_this,_this1,el,inner,x1,x2;
       _this=Attr.Attr();
       x=List.ofArray([_this.NewAttr("class","btn btn-primary btn-lg")]);
       _this1=Tags.Tags();
       el=_this1.NewTag("button",x);
       inner=Tags.Tags().text("Click me");
       x1=Operators.add(el,List.ofArray([inner]));
       x2=function()
       {
        return function()
        {
         return window.alert("This is an alert dialog.");
        };
       };
       EventsPervasives.Events().OnClick(x2,x1);
       return x1;
      }
     })
    },
    Snippet12:{
     Client:{
      lineTo:function(_,_1,_2,_3,_4,_5)
      {
       var coords,_coords_;
       coords=[_2,_3];
       _coords_=[_4,_5];
       _.lineCap=_1;
       _.beginPath();
       _.moveTo(coords[0],coords[1]);
       _.lineTo(_coords_[0],_coords_[1]);
       return _.stroke();
      },
      main:function()
      {
       var x,_this,elt,canvas,ctx;
       x=Runtime.New(T,{
        $:0
       });
       _this=Tags.Tags();
       elt=_this.NewTag("canvas",x);
       canvas=elt.Dom;
       canvas.height=400;
       canvas.width=600;
       ctx=canvas.getContext("2d");
       ctx.lineWidth=40;
       Client5.lineTo(ctx,"butt",50,50,50,350);
       Client5.lineTo(ctx,"round",250,50,250,350);
       Client5.lineTo(ctx,"square",450,50,450,350);
       return elt;
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client5.main();
      }
     })
    },
    Snippet13:{
     Control:Runtime.Class({
      get_Body:function()
      {
       var x,_this,elt,audio;
       x=Runtime.New(T,{
        $:0
       });
       _this=Tags.Tags();
       elt=_this.NewTag("audio",x);
       audio=elt.Dom;
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
      var x,_this,_this1,_this2,el,inner;
      _this=Attr.Attr();
      _this1=Attr.Attr();
      x=List.ofArray([_this.NewAttr("class","btn btn-default"),_this1.NewAttr("type","button")]);
      _this2=Tags.Tags();
      el=_this2.NewTag("button",x);
      inner=Tags.Tags().text(txt);
      return Operators.add(el,List.ofArray([inner]));
     },
     main:function()
     {
      var x,_this,_this1,x1,x2,x3,x4,x5,x6;
      _this=Attr.Attr();
      x=List.ofArray([_this.NewAttr("class","btn-group btn-group-lg")]);
      _this1=Tags.Tags();
      x1=Snippet14.btn("Back");
      x2=function()
      {
       return function()
       {
        return window.history.back();
       };
      };
      EventsPervasives.Events().OnClick(x2,x1);
      x3=Snippet14.btn("Forward");
      x4=function()
      {
       return function()
       {
        return window.history.forward();
       };
      };
      EventsPervasives.Events().OnClick(x4,x3);
      x5=Snippet14.btn("Go back 2 pages");
      x6=function()
      {
       return function()
       {
        return window.history.go(-2);
       };
      };
      EventsPervasives.Events().OnClick(x6,x5);
      return Operators.add(_this1.NewTag("div",x),List.ofArray([x1,x3,x5]));
     }
    },
    Snippet2:{
     Client:{
      main:function()
      {
       var location,x,_this,_this1,x1,_this2,_this3,_this4,x2,x3,_this5,x4,_this6,_this7;
       location=window.location;
       _this=Attr.Attr();
       x=List.ofArray([_this.NewAttr("class","table-responsive")]);
       _this1=Tags.Tags();
       _this2=Attr.Attr();
       _this3=Attr.Attr();
       x1=List.ofArray([_this2.NewAttr("class","table table-striped"),_this3.NewAttr("id","location-table")]);
       _this4=Tags.Tags();
       x3=List.ofArray([Tags.Tags().text("Property")]);
       _this5=Tags.Tags();
       x4=List.ofArray([Tags.Tags().text("Value")]);
       _this6=Tags.Tags();
       x2=List.ofArray([_this5.NewTag("th",x3),_this6.NewTag("th",x4)]);
       _this7=Tags.Tags();
       return Operators.add(_this1.NewTag("div",x),List.ofArray([Operators.add(_this4.NewTag("table",x1),List.ofArray([_this7.NewTag("tr",x2),Client6.tr("Hash",location.hash),Client6.tr("Host",location.host),Client6.tr("Hostname",location.hostname),Client6.tr("Href",location.href),Client6.tr("Pathname",location.pathname),Client6.tr("Port",location.port),Client6.tr("Protocol",location.protocol),Client6.tr("Search",location.search)]))]));
      },
      tr:function(td,_td_)
      {
       var x,x1,_this,x2,_this1,_this2;
       x1=List.ofArray([Tags.Tags().text(td)]);
       _this=Tags.Tags();
       x2=List.ofArray([Tags.Tags().text(_td_)]);
       _this1=Tags.Tags();
       x=List.ofArray([_this.NewTag("td",x1),_this1.NewTag("td",x2)]);
       _this2=Tags.Tags();
       return _this2.NewTag("tr",x);
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client6.main();
      }
     })
    },
    Snippet3:{
     Client:{
      main:function()
      {
       var elt,x,_this,_this1,_this2,x1,_this3,_this4,_this5,video;
       _this=Attr.Attr();
       _this1=Attr.Attr();
       x=List.ofArray([_this.NewAttr("height","360px"),_this1.NewAttr("width","640px")]);
       _this2=Tags.Tags();
       _this3=Attr.Attr();
       _this4=Attr.Attr();
       x1=List.ofArray([_this3.NewAttr("src","/Videos/madagascar.mp4"),_this4.NewAttr("type","video/mp4")]);
       _this5=Tags.Tags();
       elt=Operators.add(_this2.NewTag("video",x),List.ofArray([_this5.NewTag("source",x1)]));
       video=elt.Dom;
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
       return Client7.main();
      }
     })
    },
    Snippet4:{
     Client:{
      append:function(id,btn)
      {
       document.getElementById(id).appendChild(btn.Dom);
      },
      connect:function(msgText)
      {
       var ws,x,_this,_this1,x1,x2,sendBtn,x3,_this2,_this3,x4,x5;
       document.getElementById("connect-btn").setAttribute("disabled","disabled");
       ws=new WebSocket("ws://echo.websocket.org");
       _this=Attr.Attr();
       x=List.ofArray([Tags.Tags().text("Send"),_this.NewAttr("class","btn btn-primary")]);
       _this1=Tags.Tags();
       x1=_this1.NewTag("button",x);
       x2=function()
       {
        return function()
        {
         var txt;
         txt=msgText.get_Value();
         ws.send(txt);
         return Client8.log("Sent: "+txt,"black");
        };
       };
       EventsPervasives.Events().OnClick(x2,x1);
       sendBtn=x1;
       _this2=Attr.Attr();
       x3=List.ofArray([Tags.Tags().text("Disconnect"),_this2.NewAttr("class","btn btn-warning")]);
       _this3=Tags.Tags();
       x4=_this3.NewTag("button",x3);
       x5=function()
       {
        return function()
        {
         return ws.close();
        };
       };
       EventsPervasives.Events().OnClick(x5,x4);
       return Client8.handleEvents(ws,x4,sendBtn);
      },
      handleEvents:function(ws,disconnectBtn,sendBtn)
      {
       ws.onerror=function()
       {
        return Client8.log("Error","red");
       };
       ws.onmessage=function(msg)
       {
        return Client8.log("Received: "+String(msg.data),"blue");
       };
       ws.onopen=function()
       {
        Client8.append("send-btn",sendBtn);
        Client8.append("btns",disconnectBtn);
        return Client8.log("Connected","green");
       };
       ws.onclose=function()
       {
        document.getElementById("connect-btn").removeAttribute("disabled");
        sendBtn["HtmlProvider@33"].Remove(sendBtn.get_Body());
        disconnectBtn["HtmlProvider@33"].Remove(disconnectBtn.get_Body());
        return Client8.log("Disconnected","rgb(250, 167, 50)");
       };
       return;
      },
      log:function(text,color)
      {
       var x,arg00,_this,_this1,x1;
       arg00="color: "+color;
       _this=Attr.Attr();
       x=List.ofArray([Tags.Tags().text(text),_this.NewAttr("style",arg00)]);
       _this1=Tags.Tags();
       x1=_this1.NewTag("p",x);
       document.getElementById("ws-log").appendChild(x1.Dom);
       return;
      },
      main:function()
      {
       var x,_this,_this1,_this2,msgText,x1,_this3,_this4,logDiv,x2,_this5,_this6,x3,_this7,_this8,_this9,x4,_thisa,_thisb,_thisc,x5,_thisd,_thise,_thisf,_this10,x6,x7,x8,_this11,_this12,x9,_this13,_this14,xa,_this15,_this16,xb,_this17,_this18,_this19,_this1a,xc,_this1b,_this1c,xd,_this1d,_this1e,xe,_this1f,_this20,_this21,xf,x10;
       _this=Attr.Attr();
       _this1=Attr.Attr();
       x=List.ofArray([Tags.Tags().text("Hello WebSocket"),_this.NewAttr("id","msg"),_this1.NewAttr("class","form-control")]);
       _this2=Tags.Tags();
       msgText=_this2.NewTag("textarea",x);
       _this3=Attr.Attr();
       x1=List.ofArray([_this3.NewAttr("id","ws-log")]);
       _this4=Tags.Tags();
       logDiv=_this4.NewTag("div",x1);
       _this5=Attr.Attr();
       x2=List.ofArray([_this5.NewAttr("class","row")]);
       _this6=Tags.Tags();
       _this7=Attr.Attr();
       _this8=Attr.Attr();
       x3=List.ofArray([_this7.NewAttr("class","col-lg-4"),_this8.NewAttr("id","ws-col-1")]);
       _this9=Tags.Tags();
       _thisa=Attr.Attr();
       _thisb=Attr.Attr();
       x4=List.ofArray([_thisa.NewAttr("style","margin-bottom: 10px;"),_thisb.NewAttr("id","btns")]);
       _thisc=Tags.Tags();
       _thisd=Attr.Attr();
       _thise=Attr.Attr();
       _thisf=Attr.Attr();
       x5=List.ofArray([Tags.Tags().text("Connect"),_thisd.NewAttr("id","connect-btn"),_thise.NewAttr("class","btn btn-success"),_thisf.NewAttr("style","margin-right: 10px;")]);
       _this10=Tags.Tags();
       x6=_this10.NewTag("button",x5);
       x7=function()
       {
        return function()
        {
         return Client8.connect(msgText);
        };
       };
       EventsPervasives.Events().OnClick(x7,x6);
       _this11=Attr.Attr();
       x8=List.ofArray([_this11.NewAttr("class","form-group")]);
       _this12=Tags.Tags();
       _this13=Attr.Attr();
       x9=List.ofArray([Tags.Tags().text("Message:"),_this13.NewAttr("style","font-weight: bold;")]);
       _this14=Tags.Tags();
       _this15=Attr.Attr();
       xa=List.ofArray([_this15.NewAttr("id","send-btn")]);
       _this16=Tags.Tags();
       _this17=Attr.Attr();
       _this18=Attr.Attr();
       _this19=Attr.Attr();
       xb=List.ofArray([_this17.NewAttr("class","col-lg-5"),_this18.NewAttr("style","border-left: 1px solid lightgray;"),_this19.NewAttr("id","ws-col-1")]);
       _this1a=Tags.Tags();
       _this1b=Attr.Attr();
       xc=List.ofArray([_this1b.NewAttr("style","margin-left: 20px;")]);
       _this1c=Tags.Tags();
       _this1d=Attr.Attr();
       xd=List.ofArray([Tags.Tags().text("Log:"),_this1d.NewAttr("style","font-weight: bold;")]);
       _this1e=Tags.Tags();
       _this1f=Attr.Attr();
       _this20=Attr.Attr();
       xe=List.ofArray([Tags.Tags().text("Clear"),_this1f.NewAttr("style","margin-top: 10px;"),_this20.NewAttr("class","btn btn-default")]);
       _this21=Tags.Tags();
       xf=_this21.NewTag("button",xe);
       x10=function()
       {
        return function()
        {
         return logDiv.set_Html("");
        };
       };
       EventsPervasives.Events().OnClick(x10,xf);
       return Operators.add(_this6.NewTag("div",x2),List.ofArray([Operators.add(_this9.NewTag("div",x3),List.ofArray([Operators.add(_thisc.NewTag("div",x4),List.ofArray([x6])),Operators.add(_this12.NewTag("div",x8),List.ofArray([_this14.NewTag("label",x9),msgText])),_this16.NewTag("div",xa)])),Operators.add(_this1a.NewTag("div",xb),List.ofArray([Operators.add(_this1c.NewTag("div",xc),List.ofArray([_this1e.NewTag("label",xd),logDiv,xf]))]))]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client8.main();
      }
     })
    },
    Snippet5:{
     Client:{
      main:function()
      {
       var x,_this,_this1,x1,x2;
       _this=Attr.Attr();
       x=List.ofArray([Tags.Tags().text("Show Modal Dialog"),_this.NewAttr("class","btn btn-primary")]);
       _this1=Tags.Tags();
       x1=_this1.NewTag("button",x);
       x2=function()
       {
        return function()
        {
         window.showModalDialog("/modal.html");
        };
       };
       EventsPervasives.Events().OnClick(x2,x1);
       return x1;
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client9.main();
      }
     })
    },
    Snippet6:{
     Client:{
      main:function()
      {
       var x,_this,elt,objectArg,arg00,canvas,ctx;
       x=List.ofArray([Tags.Tags().text("The canvas element isn't supported by your browser.")]);
       _this=Tags.Tags();
       elt=_this.NewTag("canvas",x);
       objectArg=elt["HtmlProvider@33"];
       arg00=elt.get_Body();
       objectArg.SetStyle(arg00,"border: 1px solid;");
       canvas=elt.Dom;
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
       return Clienta.main();
      }
     })
    },
    Snippet7:{
     Client:{
      draw:function(ctx)
      {
       var now,forLoopVar,i,sec,min,hr,hr1;
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
       for(forLoopVar=1;forLoopVar<=12;forLoopVar++){
        ctx.beginPath();
        ctx.rotate(Math.PI/6);
        ctx.moveTo(100,0);
        ctx.lineTo(120,0);
        ctx.stroke();
       }
       ctx.restore();
       ctx.save();
       ctx.lineWidth=5;
       for(i=0;i<=59;i++){
        if(i%5!==0)
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
       var f;
       f=function()
       {
        var x,f1;
        x=Concurrency.Sleep(1000);
        f1=function()
        {
         var x1,f2;
         Clientb.draw(ctx);
         x1=Clientb.loop(ctx);
         f2=function()
         {
          return Concurrency.Return(null);
         };
         return Concurrency.Bind(x1,f2);
        };
        return Concurrency.Bind(x,f1);
       };
       return Concurrency.Delay(f);
      },
      main:function()
      {
       var x,_this,_this1,elt,canvas,ctx,computation,t;
       _this=Attr.Attr();
       x=List.ofArray([_this.NewAttr("id","clock")]);
       _this1=Tags.Tags();
       elt=_this1.NewTag("canvas",x);
       canvas=elt.Dom;
       canvas.width=150;
       canvas.height=150;
       ctx=canvas.getContext("2d");
       Clientb.draw(ctx);
       computation=Clientb.loop(ctx);
       t={
        $:0
       };
       Concurrency.Start(computation,t);
       return elt;
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Clientb.main();
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
      var x,_this,_this1,el,inner,x1,x2;
      _this=Attr.Attr();
      x=List.ofArray([_this.NewAttr("class","btn btn-primary btn-large")]);
      _this1=Tags.Tags();
      el=_this1.NewTag("button",x);
      inner=Tags.Tags().text("Home Page");
      x1=Operators.add(el,List.ofArray([inner]));
      x2=function()
      {
       return function()
       {
        return window.parent.location.assign("/");
       };
      };
      EventsPervasives.Events().OnClick(x2,x1);
      return x1;
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
      var x,_this,elt,objectArg,arg00,canvas,ctx;
      x=List.ofArray([Tags.Tags().text("The canvas element isn't supported by your browser.")]);
      _this=Tags.Tags();
      elt=_this.NewTag("canvas",x);
      objectArg=elt["HtmlProvider@33"];
      arg00=elt.get_Body();
      objectArg.SetStyle(arg00,"border: 1px solid;");
      canvas=elt.Dom;
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
       var x,x1,_this,_this1,x2,_this2,_this3,x5,_this6,_this7,x6,_this8,_this9;
       _this=Attr.Attr();
       x1=List.ofArray([_this.NewAttr("id","jquery-slider-container")]);
       _this1=Tags.Tags();
       _this2=Attr.Attr();
       x2=List.ofArray([_this2.NewAttr("id","jquery-slider")]);
       _this3=Tags.Tags();
       _this6=Attr.Attr();
       x5=List.ofArray([_this6.NewAttr("id","prev-slide"),Tags.Tags().text("Prev")]);
       _this7=Tags.Tags();
       _this8=Attr.Attr();
       x6=List.ofArray([_this8.NewAttr("id","next-slide"),Tags.Tags().text("Next")]);
       _this9=Tags.Tags();
       x=Operators.add(_this1.NewTag("div",x1),List.ofArray([Operators.add(_this3.NewTag("div",x2),Seq.toList(Seq.delay(function()
       {
        return Seq.map(function(x3)
        {
         var x4,arg00,_this4,_this5;
         arg00=Js.baseUrl()+Global.String(x3);
         _this4=Attr.Attr();
         x4=List.ofArray([_this4.NewAttr("src",arg00)]);
         _this5=Tags.Tags();
         return _this5.NewTag("img",x4);
        },Operators1.range(1,5));
       }))),_this7.NewTag("a",x5),_this9.NewTag("a",x6)]));
       Operators.OnAfterRender(function()
       {
        var slider,direction,f,value,timer,handlerOut;
        slider=jQuery("#jquery-slider");
        direction={
         $:1
        };
        f=function(_arg20_)
        {
         return Js.scroll(slider,direction,_arg20_);
        };
        value=setInterval(f,2000);
        timer={
         contents:value
        };
        slider.children().first().show();
        handlerOut=function()
        {
         return function()
         {
          timer.contents=setInterval(f,2000);
         };
        };
        jQuery("#jquery-slider, #prev-slide, #next-slide").hover(Runtime.CreateFuncWithThis(function()
        {
         return function()
         {
          return clearInterval(timer.contents);
         };
        }),Runtime.CreateFuncWithThis(handlerOut));
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
       var x,_this,_this1,_this2,el,inner,x1,x2;
       _this=Attr.Attr();
       _this1=Attr.Attr();
       x=List.ofArray([_this.NewAttr("class","btn btn-success"),_this1.NewAttr("style","margin-right: 8px;")]);
       _this2=Tags.Tags();
       el=_this2.NewTag("button",x);
       inner=Tags.Tags().text("Add");
       x1=Operators.add(el,List.ofArray([inner]));
       x2=function()
       {
        return function()
        {
         var patternInput;
         patternInput=JS1.tab(tabs.get_Length()+1);
         return tabs.Add1(patternInput[1],patternInput[0]);
        };
       };
       EventsPervasives.Events().OnClick(x2,x1);
       return x1;
      },
      main:function()
      {
       var x,tabs,x2,x3,_this,_this1,_this2;
       x=List.map(function(x1)
       {
        return JS1.tab(x1);
       },Seq.toList(Operators1.range(1,3)));
       tabs=Tabs.New2(x);
       _this=Attr.Attr();
       x3=List.ofArray([_this.NewAttr("style","margin-top: 8px;")]);
       _this1=Tags.Tags();
       x2=List.ofArray([tabs,Operators.add(_this1.NewTag("div",x3),List.ofArray([JS1.addTabBtn(tabs),JS1.removeTabBtn(tabs)]))]);
       _this2=Tags.Tags();
       return _this2.NewTag("div",x2);
      },
      removeTabBtn:function(tabs)
      {
       var x,_this,_this1,el,inner,x1,x2;
       _this=Attr.Attr();
       x=List.ofArray([_this.NewAttr("class","btn btn-danger")]);
       _this1=Tags.Tags();
       el=_this1.NewTag("button",x);
       inner=Tags.Tags().text("Remove");
       x1=Operators.add(el,List.ofArray([inner]));
       x2=function()
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
       EventsPervasives.Events().OnClick(x2,x1);
       return x1;
      },
      tab:function(x)
      {
       var xStr,x1,x2,_this;
       xStr=Global.String(x);
       x2="Tab "+xStr+" content";
       x1=List.ofArray([Tags.Tags().text(x2)]);
       _this=Tags.Tags();
       return["Header "+xStr,_this.NewTag("div",x1)];
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
       var x,_this;
       x=List.ofArray([Tags.Tags().text("Hello World!")]);
       _this=Tags.Tags();
       return _this.NewTag("h2",x);
      }
     })
    },
    Snippet2:{
     Client:{
      inputElt:function()
      {
       var x,_this,_this1,_this2,_this3,_this4;
       _this=Attr.Attr();
       _this1=Attr.Attr();
       _this2=Attr.Attr();
       _this3=Attr.Attr();
       x=List.ofArray([_this.NewAttr("class","form-control"),_this1.NewAttr("type","text"),_this2.NewAttr("value","Hello console!"),_this3.NewAttr("autofocus","autofocus")]);
       _this4=Tags.Tags();
       return _this4.NewTag("input",x);
      },
      logBtn:function(elt)
      {
       var x,_this,_this1,_this2,el,inner,x1,x2;
       _this=Attr.Attr();
       _this1=Attr.Attr();
       x=List.ofArray([_this.NewAttr("class","btn btn-primary"),_this1.NewAttr("type","button")]);
       _this2=Tags.Tags();
       el=_this2.NewTag("button",x);
       inner=Tags.Tags().text("Log");
       x1=Operators.add(el,List.ofArray([inner]));
       x2=function()
       {
        return function()
        {
         var a;
         a=elt.get_Value();
         return console?console.log(a):undefined;
        };
       };
       EventsPervasives.Events().OnClick(x2,x1);
       return x1;
      },
      main:function()
      {
       var input,x,_this,_this1,x1,_this2,x2,_this3,_this4,x3,_this5;
       input=Clientc.inputElt(null);
       _this=Attr.Attr();
       x=List.ofArray([_this.NewAttr("id","console-log")]);
       _this1=Tags.Tags();
       x1=List.ofArray([Tags.Tags().text("Log messages to the console")]);
       _this2=Tags.Tags();
       _this3=Attr.Attr();
       x2=List.ofArray([_this3.NewAttr("class","form-group")]);
       _this4=Tags.Tags();
       x3=List.ofArray([Tags.Tags().text("Message")]);
       _this5=Tags.Tags();
       return Operators.add(_this1.NewTag("div",x),List.ofArray([_this2.NewTag("legend",x1),Operators.add(_this4.NewTag("fieldset",x2),List.ofArray([_this5.NewTag("label",x3),input])),Clientc.logBtn(input)]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Clientc.main();
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
       return n<2?1:n*Clientd.factRec(n-1);
      },
      main:function()
      {
       var x,_this,_this1,_this2,_this3,_this4,input,x1,_this5,recSpan,x2,_this6,foldSpan,x3,_this7,_this8,_this9,x4,x5,button,x6,x7,_thisa,_thisb,x8,_thisc,_thisd,x9,_thise,_thisf;
       _this=Attr.Attr();
       _this1=Attr.Attr();
       _this2=Attr.Attr();
       _this3=Attr.Attr();
       x=List.ofArray([_this.NewAttr("type","text"),_this1.NewAttr("autofocus","autofocus"),_this2.NewAttr("class","form-control"),_this3.NewAttr("id","factorial")]);
       _this4=Tags.Tags();
       input=_this4.NewTag("input",x);
       x1=Runtime.New(T,{
        $:0
       });
       _this5=Tags.Tags();
       recSpan=_this5.NewTag("span",x1);
       x2=Runtime.New(T,{
        $:0
       });
       _this6=Tags.Tags();
       foldSpan=_this6.NewTag("span",x2);
       _this7=Attr.Attr();
       _this8=Attr.Attr();
       x3=List.ofArray([Tags.Tags().text("Factorial"),_this7.NewAttr("class","btn btn-primary"),_this8.NewAttr("style","margin-left: 8px;")]);
       _this9=Tags.Tags();
       x4=_this9.NewTag("button",x3);
       x5=function()
       {
        return function()
        {
         var v;
         v=input.get_Value()<<0;
         recSpan.set_Text("Recursion: "+Global.String(Clientd.factRec(v)));
         return foldSpan.set_Text("Array.fold: "+Global.String(Clientd.factFold(v)));
        };
       };
       EventsPervasives.Events().OnClick(x5,x4);
       button=x4;
       _thisa=Attr.Attr();
       x7=List.ofArray([_thisa.NewAttr("class","form-inline")]);
       _thisb=Tags.Tags();
       _thisc=Attr.Attr();
       x8=List.ofArray([_thisc.NewAttr("style","margin-top: 8px;")]);
       _thisd=Tags.Tags();
       x9=Runtime.New(T,{
        $:0
       });
       _thise=Tags.Tags();
       x6=List.ofArray([Operators.add(_thisb.NewTag("div",x7),List.ofArray([input,button])),Operators.add(_thisd.NewTag("div",x8),List.ofArray([recSpan,_thise.NewTag("br",x9),foldSpan]))]);
       _thisf=Tags.Tags();
       return _thisf.NewTag("div",x6);
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Clientd.main();
      }
     })
    },
    Snippet4:{
     Client:{
      main:function()
      {
       var x,_this,_this1,_this2,x1,_this3;
       _this=Attr.Attr();
       _this1=Attr.Attr();
       x=List.ofArray([_this.NewAttr("class","table table-bordered table-striped"),_this1.NewAttr("style","width: 900px;")]);
       _this2=Tags.Tags();
       x1=Runtime.New(T,{
        $:0
       });
       _this3=Tags.Tags();
       return Operators.add(Operators.add(_this2.NewTag("table",x),List.ofArray([Operators.add(_this3.NewTag("tr",x1),List.map(function(txt)
       {
        return Cliente.th(txt);
       },List.ofArray(["Level","Core","CSS","Events","HTML","Selectors-API"])))])),List.map(function(level)
       {
        return Cliente.tr(level);
       },List.ofArray(["1.0","2.0","3.0"])));
      },
      th:function(txt)
      {
       var x,_this;
       x=List.ofArray([Tags.Tags().text(txt)]);
       _this=Tags.Tags();
       return _this.NewTag("th",x);
      },
      tr:function(level)
      {
       var implementation,tds,x2,_this1;
       implementation=document.implementation;
       tds=List.map(function(feature)
       {
        var x,x1,_this;
        x1=Global.String(implementation.hasFeature(feature,level));
        x=List.ofArray([Tags.Tags().text(x1)]);
        _this=Tags.Tags();
        return _this.NewTag("td",x);
       },List.ofArray(["Core","CSS","Events","HTML","Selectors-API"]));
       x2=List.ofArray([Cliente.th(level)]);
       _this1=Tags.Tags();
       return Operators.add(_this1.NewTag("tr",x2),tds);
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Cliente.main();
      }
     })
    },
    Snippet5:{
     Client:{
      btn:function(caption,action)
      {
       var x,_this,_this1,_this2,x1,x2;
       _this=Attr.Attr();
       _this1=Attr.Attr();
       x=List.ofArray([_this.NewAttr("class","btn"),_this1.NewAttr("style","margin: 3px; width: 45px;"),Tags.Tags().text(caption)]);
       _this2=Tags.Tags();
       x1=_this2.NewTag("button",x);
       x2=function()
       {
        return function()
        {
         return action(null);
        };
       };
       EventsPervasives.Events().OnClick(x2,x1);
       return x1;
      },
      main:function()
      {
       var patternInput,op,oldNum,num,x,_this,_this1,_this2,_this3,_this4,display,updateDisplay,c,ac,n,e,o,digit,x1,x2,_this5,x3,x5,_this6,x6,_this7,x7,_this8,x8,_this9,_thisa,_thisb;
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
       _this=Attr.Attr();
       _this1=Attr.Attr();
       _this2=Attr.Attr();
       _this3=Attr.Attr();
       x=List.ofArray([_this.NewAttr("type","text"),_this1.NewAttr("value","0"),_this2.NewAttr("class","form-control"),_this3.NewAttr("id","display")]);
       _this4=Tags.Tags();
       display=_this4.NewTag("input",x);
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
        return Clientf.btn(Global.String(n1),function()
        {
         num.contents=10*num.contents+n1;
         return updateDisplay(null);
        });
       };
       x2=Runtime.New(T,{
        $:0
       });
       _this5=Tags.Tags();
       x5=Runtime.New(T,{
        $:0
       });
       _this6=Tags.Tags();
       x6=Runtime.New(T,{
        $:0
       });
       _this7=Tags.Tags();
       x7=Runtime.New(T,{
        $:0
       });
       _this8=Tags.Tags();
       x8=Runtime.New(T,{
        $:0
       });
       _this9=Tags.Tags();
       x3=List.ofArray([digit(7),digit(8),digit(9),Clientf.btn("/",o(function(x4)
       {
        return function(y)
        {
         return x4/y>>0;
        };
       })),_this6.NewTag("br",x5),digit(4),digit(5),digit(6),Clientf.btn("*",o(function(x4)
       {
        return function(y)
        {
         return x4*y;
        };
       })),_this7.NewTag("br",x6),digit(1),digit(2),digit(3),Clientf.btn("-",o(function(x4)
       {
        return function(y)
        {
         return x4-y;
        };
       })),_this8.NewTag("br",x7),digit(0),Clientf.btn("C",c),Clientf.btn("AC",ac),Clientf.btn("+",o(function(x4)
       {
        return function(y)
        {
         return x4+y;
        };
       })),_this9.NewTag("br",x8),Clientf.btn("+/-",n),Clientf.btn("=",e)]);
       _thisa=Tags.Tags();
       x1=List.ofArray([display,_this5.NewTag("br",x2),_thisa.NewTag("div",x3)]);
       _thisb=Tags.Tags();
       return _thisb.NewTag("div",x1);
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Clientf.main();
      }
     })
    },
    Snippet6:{
     Client:{
      accordionGroup:function(num)
      {
       var accordionBody,x,_this,_this1,x1,x2,_this2,jq,x3,_this3,x4,_this4,x5,x6,x7,_this5,_this6,_this7,x8,x9,_this8;
       _this=Attr.Attr();
       x=List.ofArray([_this.NewAttr("style","display: none;")]);
       _this1=Tags.Tags();
       x2=Client10.loremIpsum();
       x1=List.ofArray([Tags.Tags().text(x2)]);
       _this2=Tags.Tags();
       accordionBody=Operators.add(_this1.NewTag("div",x),List.ofArray([_this2.NewTag("div",x1)]));
       jq=jQuery(accordionBody.Dom);
       _this3=Attr.Attr();
       x4=Client10.style();
       x3=List.ofArray([_this3.NewAttr("style",x4)]);
       _this4=Tags.Tags();
       _this5=Attr.Attr();
       _this6=Attr.Attr();
       x7=List.ofArray([_this5.NewAttr("class","btn-link"),_this6.NewAttr("style","font-weight: bold;")]);
       _this7=Tags.Tags();
       x8="Collapsible Group "+Global.String(num);
       x6=Operators.add(_this7.NewTag("div",x7),List.ofArray([Tags.Tags().text(x8)]));
       x9=function()
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
       EventsPervasives.Events().OnClick(x9,x6);
       x5=List.ofArray([x6]);
       _this8=Tags.Tags();
       return Operators.add(_this4.NewTag("div",x3),List.ofArray([_this8.NewTag("div",x5),accordionBody]));
      },
      loremIpsum:Runtime.Field(function()
      {
       return"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit lacus, commodo non posuere sit amet, sodales in risus. Donec et sagittis nisl, at blandit nisl. Cras fermentum libero et erat tincidunt, vel euismod justo elementum. Quisque eget augue quis arcu dictum sagittis. Duis in arcu vulputate lorem sagittis facilisis. In non justo quis metus aliquet luctus a id justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce vitae augue sagittis, sodales diam id, blandit turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor suscipit nibh vel mollis. Vestibulum eros lorem, pharetra quis varius in, lobortis at risus.";
      }),
      main:function()
      {
       var x,_this;
       x=Runtime.New(T,{
        $:0
       });
       _this=Tags.Tags();
       return Operators.add(_this.NewTag("div",x),List.map(function(num)
       {
        return Client10.accordionGroup(num);
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
       return Client10.main();
      }
     })
    },
    Snippet7:{
     Client:{
      main:function()
      {
       var x,_this,_this1,output,x1,_this2,_this3,_this4,_this5,_this6,input,x2,_this7,_this8,x3,_this9,_thisa,_thisb,x4,x5;
       _this=Attr.Attr();
       x=List.ofArray([_this.NewAttr("style","margin-top: 8px;")]);
       _this1=Tags.Tags();
       output=_this1.NewTag("div",x);
       _this2=Attr.Attr();
       _this3=Attr.Attr();
       _this4=Attr.Attr();
       _this5=Attr.Attr();
       x1=List.ofArray([_this2.NewAttr("type","text"),_this3.NewAttr("autofocus","autofocus"),_this4.NewAttr("class","form-control"),_this5.NewAttr("id","display")]);
       _this6=Tags.Tags();
       input=_this6.NewTag("input",x1);
       _this7=Attr.Attr();
       x2=List.ofArray([_this7.NewAttr("class","form-inline")]);
       _this8=Tags.Tags();
       _this9=Attr.Attr();
       _thisa=Attr.Attr();
       x3=List.ofArray([Tags.Tags().text("MD5"),_this9.NewAttr("class","btn btn-primary"),_thisa.NewAttr("style","margin-left: 8px;")]);
       _thisb=Tags.Tags();
       x4=_thisb.NewTag("button",x3);
       x5=function()
       {
        return function()
        {
         var f,arg00,t;
         f=function()
         {
          var x6,f1;
          x6=AjaxRemotingProvider.Async("Sitelet:0",[input.get_Value()]);
          f1=function(_arg11)
          {
           output.set_Text(_arg11);
           return Concurrency.Return(null);
          };
          return Concurrency.Bind(x6,f1);
         };
         arg00=Concurrency.Delay(f);
         t={
          $:0
         };
         return Concurrency.Start(arg00,t);
        };
       };
       EventsPervasives.Events().OnClick(x5,x4);
       return Operators.add(_this8.NewTag("div",x2),List.ofArray([input,x4,output]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client11.main();
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
       return elt.Dom.addEventListener("dragstart",function()
       {
        idRef.contents=elt.get_Id();
       },false);
      },
      handleDragging:function(elt,idRef)
      {
       var dom;
       dom=elt.Dom;
       dom.addEventListener("dragenter",function(e)
       {
        var objectArg,arg00,objectArg1,arg001;
        e.preventDefault();
        objectArg=elt["HtmlProvider@33"];
        arg00=elt.get_Body();
        objectArg.SetCss(arg00,"background-color","lightgray");
        objectArg1=elt["HtmlProvider@33"];
        arg001=elt.get_Body();
        return objectArg1.SetCss(arg001,"border","dotted");
       },false);
       dom.addEventListener("dragleave",function(e)
       {
        var objectArg,arg00,objectArg1,arg001;
        e.preventDefault();
        objectArg=elt["HtmlProvider@33"];
        arg00=elt.get_Body();
        objectArg.SetCss(arg00,"background-color","white");
        objectArg1=elt["HtmlProvider@33"];
        arg001=elt.get_Body();
        return objectArg1.SetCss(arg001,"border","solid");
       },false);
       dom.addEventListener("dragover",function(e)
       {
        return e.preventDefault();
       },false);
       return dom.addEventListener("drop",function(e)
       {
        var nodeClone,objectArg,arg00,objectArg1,arg001;
        e.preventDefault();
        nodeClone=document.getElementById(idRef.contents).cloneNode(false);
        elt.set_Html("");
        elt.AppendN(nodeClone);
        objectArg=elt["HtmlProvider@33"];
        arg00=elt.get_Body();
        objectArg.SetCss(arg00,"background-color","white");
        objectArg1=elt["HtmlProvider@33"];
        arg001=elt.get_Body();
        return objectArg1.SetCss(arg001,"border","black solid");
       },false);
      },
      img:function(x)
      {
       var x1,_this,arg00,_this1,arg001,_this2,_this3,_this4;
       _this=Attr.Attr();
       arg00="cat-"+x;
       _this1=Attr.Attr();
       arg001="/Images/cat"+x+".jpg";
       _this2=Attr.Attr();
       _this3=Attr.Attr();
       x1=List.ofArray([_this.NewAttr("class","cat-img"),_this1.NewAttr("id",arg00),_this2.NewAttr("src",arg001),_this3.NewAttr("draggable","true")]);
       _this4=Tags.Tags();
       return _this4.NewTag("img",x1);
      },
      imgDiv:function(img)
      {
       var x,_this,_this1,_this2;
       _this=Attr.Attr();
       _this1=Attr.Attr();
       x=List.ofArray([_this.NewAttr("class","col-lg-3 cat-img-div"),_this1.NewAttr("style","width: auto;")]);
       _this2=Tags.Tags();
       return Operators.add(_this2.NewTag("div",x),List.ofArray([img]));
      },
      main:function()
      {
       var patternInput,img3,img2,img1,idRef,src,x,_this,_this1,_this2,target,x1,_this3,_this4,x2,_this5,_this6,_this7,el,inner,f,l,x3,_this8;
       patternInput=[{
        contents:""
       },JS2.img("1"),JS2.img("2"),JS2.img("3")];
       img3=patternInput[3];
       img2=patternInput[2];
       img1=patternInput[1];
       idRef=patternInput[0];
       _this=Attr.Attr();
       _this1=Attr.Attr();
       x=List.ofArray([_this.NewAttr("class","row"),_this1.NewAttr("id","src")]);
       _this2=Tags.Tags();
       src=Operators.add(_this2.NewTag("div",x),List.ofArray([JS2.imgDiv(img1),JS2.imgDiv(img2),JS2.imgDiv(img3)]));
       _this3=Attr.Attr();
       x1=List.ofArray([_this3.NewAttr("id","target")]);
       _this4=Tags.Tags();
       _this5=Attr.Attr();
       _this6=Attr.Attr();
       x2=List.ofArray([_this5.NewAttr("class","text-center"),_this6.NewAttr("id","target-text")]);
       _this7=Tags.Tags();
       el=_this7.NewTag("p",x2);
       inner=Tags.Tags().text("Drop image here");
       target=Operators.add(_this4.NewTag("div",x1),List.ofArray([Operators.add(el,List.ofArray([inner]))]));
       f=function(elt)
       {
        return JS2.handleDragStart(idRef,elt);
       };
       l=List.ofArray([img1,img2,img3]);
       Seq.iter(f,l);
       JS2.handleDragging(target,idRef);
       x3=List.ofArray([src,target]);
       _this8=Tags.Tags();
       return _this8.NewTag("div",x3);
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
       var x,_this,_this1,_this2,_this3,el,inner;
       _this=Attr.Attr();
       _this1=Attr.Attr();
       _this2=Attr.Attr();
       x=List.ofArray([_this.NewAttr("class","btn btn-lg btn-warning"),_this1.NewAttr("id","clear-btn"),_this2.NewAttr("type","button")]);
       _this3=Tags.Tags();
       el=_this3.NewTag("button",x);
       inner=Tags.Tags().text("Clear Timeout");
       return Operators.add(el,List.ofArray([inner]));
      },
      clearTimeout:function(btn,handle)
      {
       var x;
       x=function(elt)
       {
        return function()
        {
         elt["HtmlProvider@33"].Remove(elt.get_Body());
         clearTimeout(handle);
         return document.getElementById("set-btn").removeAttribute("disabled");
        };
       };
       EventsPervasives.Events().OnClick(x,btn);
       return;
      },
      main:function()
      {
       var x,_this,btnsDiv,x1,_this1,_this2,_this3,_this4,el,inner,x2,x3,setBtn;
       x=Runtime.New(T,{
        $:0
       });
       _this=Tags.Tags();
       btnsDiv=_this.NewTag("div",x);
       _this1=Attr.Attr();
       _this2=Attr.Attr();
       _this3=Attr.Attr();
       x1=List.ofArray([_this1.NewAttr("class","btn btn-lg btn-primary"),_this2.NewAttr("id","set-btn"),_this3.NewAttr("type","button")]);
       _this4=Tags.Tags();
       el=_this4.NewTag("button",x1);
       inner=Tags.Tags().text("Set Timeout");
       x2=Operators.add(el,List.ofArray([inner]));
       x3=function(elt)
       {
        return function()
        {
         var objectArg,arg00,btn;
         objectArg=elt["HtmlProvider@33"];
         arg00=elt.get_Body();
         objectArg.SetAttribute(arg00,"disabled","disabled");
         btn=JS3.clearBtn();
         JS3.clearTimeout(btn,JS3.timerHandle(btn));
         return btnsDiv.AppendI(btn);
        };
       };
       EventsPervasives.Events().OnClick(x3,x2);
       setBtn=x2;
       return Operators.add(btnsDiv,List.ofArray([setBtn]));
      },
      timerHandle:function(btn)
      {
       return setTimeout(function()
       {
        btn["HtmlProvider@33"].Remove(btn.get_Body());
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
      var x;
      x=Client12.loginPiglet({
       Username:"",
       Password:""
      });
      return Piglet.Render(function(name)
      {
       return function(password)
       {
        return function(submit)
        {
         return Client12.loginRender(name,password,submit);
        };
       };
      },Piglet.Run(function(loginInfo)
      {
       var f,arg00,t;
       f=function()
       {
        var x1,f1;
        x1=AjaxRemotingProvider.Async("Sitelet:2",[loginInfo]);
        f1=function(_arg1)
        {
         if(_arg1.$==1)
          {
           window.location.assign(redirectUrl);
           return Concurrency.Return(null);
          }
         else
          {
           alert("Login failed");
           return Concurrency.Return(null);
          }
        };
        return Concurrency.Bind(x1,f1);
       };
       arg00=Concurrency.Delay(f);
       t={
        $:0
       };
       return Concurrency.Start(arg00,t);
      },x));
     },
     loginPiglet:function(init)
     {
      return Piglet.WithSubmit(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Piglet.Return(function(username)
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
      },"Please enter your username.",Piglet.Yield(init.Username))),Validation.Is(function(value)
      {
       return Validation.NotEmpty(value);
      },"Please enter your password.",Piglet.Yield(init.Password))));
     },
     loginRender:function(name,password,submit)
     {
      var x,_this,_this1,_this2,x1,_this3,_this4,_this5,_this6,_this7,_this8,_this9,x3,_thisa,_thisb,x4,_thisc,_thisd,_thise,x5,_thisf,_this10;
      _this=Attr.Attr();
      _this1=Attr.Attr();
      x=List.ofArray([_this.NewAttr("class","well"),_this1.NewAttr("id","login-form")]);
      _this2=Tags.Tags();
      _this3=Attr.Attr();
      x1=List.ofArray([_this3.NewAttr("class","form-group")]);
      _this4=Tags.Tags();
      _this5=Attr.Attr();
      _this6=Attr.Attr();
      _this7=Attr.Attr();
      _this8=Attr.Attr();
      _this9=Attr.Attr();
      _thisa=Attr.Attr();
      x3=List.ofArray([_thisa.NewAttr("class","form-group")]);
      _thisb=Tags.Tags();
      _thisc=Attr.Attr();
      _thisd=Attr.Attr();
      _thise=Attr.Attr();
      x4=Operators.add(Controls.input("text",function(x2)
      {
       return x2;
      },function(x2)
      {
       return x2;
      },password),List.ofArray([_thisc.NewAttr("class","form-control"),_thisd.NewAttr("type","password"),_thise.NewAttr("placeholder","Password")]));
      x5=function()
      {
       return function(keyCode)
       {
        return keyCode.KeyCode===13?jQuery("#submit-btn").click():null;
       };
      };
      EventsPervasives.Events().OnKeyDown(x5,x4);
      _thisf=Attr.Attr();
      _this10=Attr.Attr();
      return Operators.add(_this2.NewTag("div",x),List.ofArray([Operators.add(_this4.NewTag("div",x1),List.ofArray([Operators.add(Controls.input("text",function(x2)
      {
       return x2;
      },function(x2)
      {
       return x2;
      },name),List.ofArray([_this5.NewAttr("class","form-control"),_this6.NewAttr("type","text"),_this7.NewAttr("autofocus","autofocus"),_this8.NewAttr("required","required"),_this9.NewAttr("placeholder","Username")]))])),Operators.add(_thisb.NewTag("div",x3),List.ofArray([x4])),Operators.add(Controls.SubmitValidate(submit),List.ofArray([_thisf.NewAttr("class","btn btn-primary"),_this10.NewAttr("id","submit-btn")]))]));
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Client12.form(this.redirectUrl);
     }
    })
   },
   NewSnippet:{
    Client:{
     Button:function(writer)
     {
      var x,_this,x1,x2;
      x=Runtime.New(T,{
       $:0
      });
      _this=Tags.Tags();
      x1=_this.NewTag("button",x);
      x2=function()
      {
       return function()
       {
        return writer.Trigger(Runtime.New(Result,{
         $:0,
         $0:""
        }));
       };
      };
      EventsPervasives.Events().OnClick(x2,x1);
      return x1;
     },
     form:Runtime.Field(function()
     {
      var x;
      x=Client13.snippetPiglet({
       Id:"",
       Title:"",
       Url:"",
       MetaDescription:"",
       Description:"",
       DescriptionHtml:"",
       Tags:[""]
      });
      return Piglet.Render(function(id)
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
              return Client13.snippetView(id,title,url,metaDescription,description,descriptionHtml,tags,submit);
             };
            };
           };
          };
         };
        };
       };
      },Piglet.Run(function(snippet)
      {
       var f,arg00,t;
       f=function()
       {
        var x1,f1;
        x1=AjaxRemotingProvider.Async("Sitelet:3",[snippet]);
        f1=function()
        {
         alert("Done");
         return Concurrency.Return(null);
        };
        return Concurrency.Bind(x1,f1);
       };
       arg00=Concurrency.Delay(f);
       t={
        $:0
       };
       return Concurrency.Start(arg00,t);
      },x));
     }),
     snippetPiglet:function(init)
     {
      return Piglet.WithSubmit(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Piglet.Return(function(id)
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
      }),Piglet.Yield(init.Id)),Piglet.Yield(init.Title)),Piglet.Yield(init.Url)),Piglet.Yield(init.MetaDescription)),Piglet.Yield(init.Description)),Piglet.Yield(init.DescriptionHtml)),Piglet.ManyInit(init.Tags,"",function(init1)
      {
       return Client13.tagPiglet(init1);
      })));
     },
     snippetView:function(id,title,url,metaDescription,description,descriptionHtml,tags,submit)
     {
      var x,_this,_this1,x1,_this2,_this3,_this4,_this5,_this6,_this7,x3,_this8,_this9,_thisa,_thisb,_thisc,x4,_thisd,_thise,_thisf,_this10,_this11,x5,_this12,_this13,_this14,_this15,_this16,x6,_this17,_this18,_this19,_this1a,_this1b,x7,_this1c,_this1d,_this1e,_this1f,_this20,x8,_this21,x9,_this22,_this23,_this24,_this25;
      _this=Attr.Attr();
      x=List.ofArray([_this.NewAttr("class","well col-md-4")]);
      _this1=Tags.Tags();
      _this2=Attr.Attr();
      x1=List.ofArray([_this2.NewAttr("class","form-group")]);
      _this3=Tags.Tags();
      _this4=Attr.Attr();
      _this5=Attr.Attr();
      _this6=Attr.Attr();
      _this7=Attr.Attr();
      _this8=Attr.Attr();
      x3=List.ofArray([_this8.NewAttr("class","form-group")]);
      _this9=Tags.Tags();
      _thisa=Attr.Attr();
      _thisb=Attr.Attr();
      _thisc=Attr.Attr();
      _thisd=Attr.Attr();
      x4=List.ofArray([_thisd.NewAttr("class","form-group")]);
      _thise=Tags.Tags();
      _thisf=Attr.Attr();
      _this10=Attr.Attr();
      _this11=Attr.Attr();
      _this12=Attr.Attr();
      x5=List.ofArray([_this12.NewAttr("class","form-group")]);
      _this13=Tags.Tags();
      _this14=Attr.Attr();
      _this15=Attr.Attr();
      _this16=Attr.Attr();
      _this17=Attr.Attr();
      x6=List.ofArray([_this17.NewAttr("class","form-group")]);
      _this18=Tags.Tags();
      _this19=Attr.Attr();
      _this1a=Attr.Attr();
      _this1b=Attr.Attr();
      _this1c=Attr.Attr();
      x7=List.ofArray([_this1c.NewAttr("class","form-group")]);
      _this1d=Tags.Tags();
      _this1e=Attr.Attr();
      _this1f=Attr.Attr();
      _this20=Attr.Attr();
      x8=Runtime.New(T,{
       $:0
      });
      _this21=Tags.Tags();
      _this22=Attr.Attr();
      _this23=Attr.Attr();
      _this24=Attr.Attr();
      x9=List.ofArray([Operators.add(Client13.Button(tags.get_Add()),List.ofArray([Tags.Tags().text("New Tag"),_this22.NewAttr("class","btn btn-default")])),Operators.add(Controls.SubmitValidate(submit),List.ofArray([_this23.NewAttr("class","btn btn-primary"),_this24.NewAttr("id","submit-btn")]))]);
      _this25=Tags.Tags();
      return Operators.add(_this1.NewTag("div",x),List.ofArray([Operators.add(_this3.NewTag("div",x1),List.ofArray([Operators.add(Controls.input("text",function(x2)
      {
       return x2;
      },function(x2)
      {
       return x2;
      },id),List.ofArray([_this4.NewAttr("class","form-control"),_this5.NewAttr("type","text"),_this6.NewAttr("autofocus","autofocus"),_this7.NewAttr("placeholder","Id")]))])),Operators.add(_this9.NewTag("div",x3),List.ofArray([Operators.add(Controls.input("text",function(x2)
      {
       return x2;
      },function(x2)
      {
       return x2;
      },title),List.ofArray([_thisa.NewAttr("class","form-control"),_thisb.NewAttr("type","text"),_thisc.NewAttr("placeholder","Title")]))])),Operators.add(_thise.NewTag("div",x4),List.ofArray([Operators.add(Controls.input("text",function(x2)
      {
       return x2;
      },function(x2)
      {
       return x2;
      },url),List.ofArray([_thisf.NewAttr("class","form-control"),_this10.NewAttr("type","text"),_this11.NewAttr("placeholder","Url")]))])),Operators.add(_this13.NewTag("div",x5),List.ofArray([Operators.add(Controls.TextArea(metaDescription),List.ofArray([_this14.NewAttr("class","form-control"),_this15.NewAttr("type","text"),_this16.NewAttr("placeholder","Meta Description")]))])),Operators.add(_this18.NewTag("div",x6),List.ofArray([Operators.add(Controls.TextArea(description),List.ofArray([_this19.NewAttr("class","form-control"),_this1a.NewAttr("type","text"),_this1b.NewAttr("placeholder","Description")]))])),Operators.add(_this1d.NewTag("div",x7),List.ofArray([Operators.add(Controls.TextArea(descriptionHtml),List.ofArray([_this1e.NewAttr("class","form-control"),_this1f.NewAttr("type","text"),_this20.NewAttr("placeholder","Description HTML")]))])),Controls.RenderMany(tags,function()
      {
       return function(tag)
       {
        return Client13.tagView(tag);
       };
      },_this21.NewTag("div",x8)),_this25.NewTag("div",x9)]));
     },
     tagPiglet:function(init)
     {
      return Pervasives.op_LessMultiplyGreater(Piglet.Return(function(x)
      {
       return x;
      }),Piglet.Yield(init));
     },
     tagView:function(tag)
     {
      var x,_this,_this1,_this2,_this3,_this4;
      _this=Attr.Attr();
      x=List.ofArray([_this.NewAttr("class","form-group")]);
      _this1=Tags.Tags();
      _this2=Attr.Attr();
      _this3=Attr.Attr();
      _this4=Attr.Attr();
      return Operators.add(_this1.NewTag("div",x),List.ofArray([Operators.add(Controls.input("text",function(x1)
      {
       return x1;
      },function(x1)
      {
       return x1;
      },tag),List.ofArray([_this2.NewAttr("class","form-control"),_this3.NewAttr("type","text"),_this4.NewAttr("placeholder","Tag")]))]));
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Client13.form();
     }
    })
   },
   Search:{
    Client:{
     main:function()
     {
      return Piglet.Render(function(queryString)
      {
       return function(submit)
       {
        return Client14.view(queryString,submit);
       };
      },Piglet.Run(function(queryString)
      {
       return window.location.assign("/search/"+Global.encodeURIComponent(queryString)+"/1");
      },Client14.queryPiglet("")));
     },
     queryPiglet:function(init)
     {
      return Piglet.WithSubmit(Validation.Is(function(value)
      {
       return Validation.NotEmpty(value);
      },"Please enter a search query.",Pervasives.op_LessMultiplyGreater(Piglet.Return(function(x)
      {
       return x;
      }),Piglet.Yield(init))));
     },
     view:function(queryString,submit)
     {
      var x,_this,_this1,x1,_this2,_this3,_this4,_this5,x3,x4,_this6,_this7,_this8,_this9,_thisa,_thisb,arg00;
      _this=Attr.Attr();
      x=List.ofArray([_this.NewAttr("class","input-group input-group-lg col-md-6 col-md-offset-3")]);
      _this1=Tags.Tags();
      _this2=Attr.Attr();
      _this3=Attr.Attr();
      _this4=Attr.Attr();
      _this5=Attr.Attr();
      x1=Operators.add(Controls.input("text",function(x2)
      {
       return x2;
      },function(x2)
      {
       return x2;
      },queryString),List.ofArray([_this2.NewAttr("class","form-control"),_this3.NewAttr("id","query"),_this4.NewAttr("type","text"),_this5.NewAttr("autofocus","autofocus")]));
      x3=function()
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
      EventsPervasives.Events().OnKeyUp(x3,x1);
      _this6=Attr.Attr();
      x4=List.ofArray([_this6.NewAttr("class","input-group-btn")]);
      _this7=Tags.Tags();
      _this8=Attr.Attr();
      _this9=Attr.Attr();
      _thisa=Attr.Attr();
      _thisb=Attr.Attr();
      arg00="data-"+"loading-text";
      return Operators.add(_this1.NewTag("div",x),List.ofArray([x1,Operators.add(_this7.NewTag("span",x4),List.ofArray([Operators.add(Controls.SubmitValidate(submit),List.ofArray([_this8.NewAttr("class","btn btn-primary"),_this9.NewAttr("id","search-btn"),_thisa.NewAttr("value","Search"),_thisb.NewAttr(arg00,"Please wait...")]))]))]));
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Client14.main();
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
       var id,screenName,profileLink,replyLink,retweetLink,favoriteLink,x,_this,p,x1,_this1,_this2,x2,x3,_this3,_this4,_this5,_this6,x4,x5,_this7,_this8,_this9,_thisa,x6,_thisb,x7,_thisc,x8,x9,_thisd,xa,_thise,_thisf,xb,_this10,_this11,_this12,_this13,xc,_this14,_this15,_this16,_this17,xd,_this18,_this19,_this1a,_this1b;
       id=tweet.id;
       screenName=tweet.screenName;
       profileLink="https://twitter.com/"+screenName;
       replyLink="https://twitter.com/intent/tweet?in_reply_to="+id;
       retweetLink="https://twitter.com/intent/retweet?tweet_id="+id;
       favoriteLink="https://twitter.com/intent/favorite?tweet_id="+id;
       x=Runtime.New(T,{
        $:0
       });
       _this=Tags.Tags();
       p=_this.NewTag("p",x);
       p.set_Html(tweet.statusAsHtml);
       _this1=Attr.Attr();
       x1=List.ofArray([_this1.NewAttr("class","list-group-item")]);
       _this2=Tags.Tags();
       _this3=Attr.Attr();
       _this4=Attr.Attr();
       _this5=Attr.Attr();
       x3=List.ofArray([_this3.NewAttr("href",profileLink),_this4.NewAttr("class","profile-link"),_this5.NewAttr("target","_blank")]);
       _this6=Tags.Tags();
       x5=tweet.avatar;
       _this7=Attr.Attr();
       _this8=Attr.Attr();
       _this9=Attr.Attr();
       x4=List.ofArray([_this7.NewAttr("src",x5),_this8.NewAttr("alt",screenName),_this9.NewAttr("class","avatar")]);
       _thisa=Tags.Tags();
       x6=List.ofArray([Tags.Tags().text(screenName)]);
       _thisb=Tags.Tags();
       x7=Runtime.New(T,{
        $:0
       });
       _thisc=Tags.Tags();
       x9=tweet.createdAt;
       x8=List.ofArray([Tags.Tags().text(x9)]);
       _thisd=Tags.Tags();
       _thise=Attr.Attr();
       xa=List.ofArray([_thise.NewAttr("class","tweet-actions")]);
       _thisf=Tags.Tags();
       _this10=Attr.Attr();
       _this11=Attr.Attr();
       _this12=Attr.Attr();
       xb=List.ofArray([_this10.NewAttr("href",replyLink),_this11.NewAttr("class","tweet-action"),_this12.NewAttr("style","margin-right: 5px;")]);
       _this13=Tags.Tags();
       _this14=Attr.Attr();
       _this15=Attr.Attr();
       _this16=Attr.Attr();
       xc=List.ofArray([_this14.NewAttr("href",retweetLink),_this15.NewAttr("class","tweet-action"),_this16.NewAttr("style","margin-right: 5px;")]);
       _this17=Tags.Tags();
       _this18=Attr.Attr();
       _this19=Attr.Attr();
       xd=List.ofArray([_this18.NewAttr("href",favoriteLink),_this19.NewAttr("class","tweet-action")]);
       _this1a=Tags.Tags();
       x2=List.ofArray([Operators.add(_this6.NewTag("a",x3),List.ofArray([_thisa.NewTag("img",x4),_thisb.NewTag("strong",x6)])),_thisc.NewTag("br",x7),_thisd.NewTag("small",x8),p,Operators.add(_thisf.NewTag("div",xa),List.ofArray([Operators.add(_this13.NewTag("a",xb),List.ofArray([Tags.Tags().text("Reply")])),Operators.add(_this17.NewTag("a",xc),List.ofArray([Tags.Tags().text("Retweet")])),Operators.add(_this1a.NewTag("a",xd),List.ofArray([Tags.Tags().text("Favorite")]))]))]);
       _this1b=Tags.Tags();
       return Operators.add(_this2.NewTag("li",x1),List.ofArray([_this1b.NewTag("div",x2)]));
      },
      main:function()
      {
       var x,_this,_this1,x1;
       _this=Attr.Attr();
       x=List.ofArray([_this.NewAttr("id","tweets")]);
       _this1=Tags.Tags();
       x1=_this1.NewTag("div",x);
       Operators.OnAfterRender(function(elt)
       {
        var f,arg00,t;
        f=function()
        {
         var x2,f1;
         x2=AjaxRemotingProvider.Async("Sitelet:1",[]);
         f1=function(_arg1)
         {
          var tweets,x3,_this2,_this3,_this4,ul;
          if(_arg1.$==1)
           {
            tweets=_arg1.$0;
            _this2=Attr.Attr();
            _this3=Attr.Attr();
            x3=List.ofArray([_this2.NewAttr("class","list-group"),_this3.NewAttr("id","tweets-ul")]);
            _this4=Tags.Tags();
            ul=_this4.NewTag("ul",x3);
            Arrays.iter(function(tweet)
            {
             return ul.AppendI(Client15.li(tweet));
            },tweets);
            elt.AppendI(ul);
            Client15.toggleActionsVisibility();
            Client15.handleTweetActions();
            return Concurrency.Return(null);
           }
          else
           {
            alert("Failed to fetch the latest tweets.");
            return Concurrency.Return(null);
           }
         };
         return Concurrency.Bind(x2,f1);
        };
        arg00=Concurrency.Delay(f);
        t={
         $:0
        };
        return Concurrency.Start(arg00,t);
       },x1);
       return x1;
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
       return Client15.main();
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
  window=Runtime.Safe(Global.window);
  Concurrency=Runtime.Safe(Global.WebSharper.Concurrency);
  List=Runtime.Safe(Global.WebSharper.List);
  Html=Runtime.Safe(Global.WebSharper.Html);
  Client1=Runtime.Safe(Html.Client);
  Tags=Runtime.Safe(Client1.Tags);
  Operators=Runtime.Safe(Client1.Operators);
  Attr=Runtime.Safe(Client1.Attr);
  EventsPervasives=Runtime.Safe(Client1.EventsPervasives);
  document=Runtime.Safe(Global.document);
  google=Runtime.Safe(Global.google);
  visualization=Runtime.Safe(google.visualization);
  DataTable=Runtime.Safe(visualization.DataTable);
  Google=Runtime.Safe(Sitelet.Google);
  Snippet11=Runtime.Safe(Google.Snippet1);
  Client2=Runtime.Safe(Snippet11.Client);
  LineChart=Runtime.Safe(visualization.LineChart);
  Seq=Runtime.Safe(Global.WebSharper.Seq);
  Snippet2=Runtime.Safe(Google.Snippet2);
  Client3=Runtime.Safe(Snippet2.Client);
  PieChart=Runtime.Safe(visualization.PieChart);
  Snippet3=Runtime.Safe(Google.Snippet3);
  Html5=Runtime.Safe(Sitelet.Html5);
  Snippet12=Runtime.Safe(Html5.Snippet1);
  Client4=Runtime.Safe(Snippet12.Client);
  T=Runtime.Safe(List.T);
  Snippet10=Runtime.Safe(Html5.Snippet10);
  JS=Runtime.Safe(Snippet10.JS);
  Snippet121=Runtime.Safe(Html5.Snippet12);
  Client5=Runtime.Safe(Snippet121.Client);
  Snippet14=Runtime.Safe(Html5.Snippet14);
  Snippet21=Runtime.Safe(Html5.Snippet2);
  Client6=Runtime.Safe(Snippet21.Client);
  Snippet31=Runtime.Safe(Html5.Snippet3);
  Client7=Runtime.Safe(Snippet31.Client);
  WebSocket=Runtime.Safe(Global.WebSocket);
  Snippet4=Runtime.Safe(Html5.Snippet4);
  Client8=Runtime.Safe(Snippet4.Client);
  Snippet5=Runtime.Safe(Html5.Snippet5);
  Client9=Runtime.Safe(Snippet5.Client);
  Snippet6=Runtime.Safe(Html5.Snippet6);
  Clienta=Runtime.Safe(Snippet6.Client);
  Date=Runtime.Safe(Global.Date);
  Math=Runtime.Safe(Global.Math);
  Number=Runtime.Safe(Global.Number);
  Snippet7=Runtime.Safe(Html5.Snippet7);
  Clientb=Runtime.Safe(Snippet7.Client);
  Snippet8=Runtime.Safe(Html5.Snippet8);
  Snippet9=Runtime.Safe(Html5.Snippet9);
  JQuery=Runtime.Safe(Sitelet.JQuery);
  Snippet13=Runtime.Safe(JQuery.Snippet1);
  Js=Runtime.Safe(Snippet13.Js);
  Operators1=Runtime.Safe(Global.WebSharper.Operators);
  jQuery=Runtime.Safe(Global.jQuery);
  setInterval=Runtime.Safe(Global.setInterval);
  clearInterval=Runtime.Safe(Global.clearInterval);
  JQueryUI=Runtime.Safe(Sitelet.JQueryUI);
  Snippet15=Runtime.Safe(JQueryUI.Snippet1);
  JS1=Runtime.Safe(Snippet15.JS);
  JQueryUI1=Runtime.Safe(Global.WebSharper.JQueryUI);
  Tabs=Runtime.Safe(JQueryUI1.Tabs);
  Datepicker=Runtime.Safe(JQueryUI1.Datepicker);
  console=Runtime.Safe(Global.console);
  Js1=Runtime.Safe(Sitelet.Js);
  Snippet22=Runtime.Safe(Js1.Snippet2);
  Clientc=Runtime.Safe(Snippet22.Client);
  Arrays=Runtime.Safe(Global.WebSharper.Arrays);
  Snippet32=Runtime.Safe(Js1.Snippet3);
  Clientd=Runtime.Safe(Snippet32.Client);
  Snippet41=Runtime.Safe(Js1.Snippet4);
  Cliente=Runtime.Safe(Snippet41.Client);
  Snippet51=Runtime.Safe(Js1.Snippet5);
  Clientf=Runtime.Safe(Snippet51.Client);
  Snippet61=Runtime.Safe(Js1.Snippet6);
  Client10=Runtime.Safe(Snippet61.Client);
  Remoting=Runtime.Safe(Global.WebSharper.Remoting);
  AjaxRemotingProvider=Runtime.Safe(Remoting.AjaxRemotingProvider);
  Snippet71=Runtime.Safe(Js1.Snippet7);
  Client11=Runtime.Safe(Snippet71.Client);
  Snippet81=Runtime.Safe(Js1.Snippet8);
  JS2=Runtime.Safe(Snippet81.JS);
  Snippet91=Runtime.Safe(Js1.Snippet9);
  JS3=Runtime.Safe(Snippet91.JS);
  clearTimeout=Runtime.Safe(Global.clearTimeout);
  setTimeout=Runtime.Safe(Global.setTimeout);
  alert=Runtime.Safe(Global.alert);
  Login=Runtime.Safe(Sitelet.Login);
  Client12=Runtime.Safe(Login.Client);
  Piglets=Runtime.Safe(Global.WebSharper.Piglets);
  Piglet=Runtime.Safe(Piglets.Piglet);
  Pervasives=Runtime.Safe(Piglets.Pervasives);
  Validation=Runtime.Safe(Piglet.Validation);
  Controls=Runtime.Safe(Piglets.Controls);
  Result=Runtime.Safe(Piglets.Result);
  NewSnippet=Runtime.Safe(Sitelet.NewSnippet);
  Client13=Runtime.Safe(NewSnippet.Client);
  Search=Runtime.Safe(Sitelet.Search);
  Client14=Runtime.Safe(Search.Client);
  Twitter=Runtime.Safe(Sitelet.Twitter);
  Snippet16=Runtime.Safe(Twitter.Snippet1);
  return Client15=Runtime.Safe(Snippet16.Client);
 });
 Runtime.OnLoad(function()
 {
  Client13.form();
  Client10.style();
  Client10.loremIpsum();
  Js.baseUrl();
  Client3.data();
  return;
 });
}());
