(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,Website,AddThis,WebSharper,Html,Default,HTML5,List,T,Controls,Snippet1,Client,Arrays,Seq,Operators,Snippet10,Client1,EventsPervasives,Operators1,Snippet11,Client2,document,Snippet2,Client3,window,Snippet3,Client4,jQuery,Remoting,Snippet4,Client5,Concurrency,alert,JavaScript,Snippet5,Client6,String,Snippet6,Client7,Snippet7,Client8,WebSocket,Snippet8,Client9,Snippet9,Clienta,Forkme,Highlight,Clientb,Formlet,Controls1,Enhance,Data,Formlet1,Index,Clientc,InsertSnippet,Clientd,Login,Cliente,encodeURIComponent,Strings,Search,Clientf;
 Runtime.Define(Global,{
  Website:{
   AddThis:{
    Control:Runtime.Class({
     get_Body:function()
     {
      return AddThis.main();
     }
    }),
    main:function()
    {
     var section,_this,x;
     section=(_this=HTML5.Tags(),(x=Runtime.New(T,{
      $:0
     }),_this.NewTag("section",x)));
     section.set_Html("<div class=\"addthis_toolbox addthis_default_style \">\r\n               <a class=\"addthis_button_facebook_like\" fb:like:layout=\"button_count\"></a>\r\n               <a class=\"addthis_button_tweet\" tw:hashtags=\"fsharp,websharper\"></a>\r\n               <a class=\"addthis_button_pinterest_pinit\"></a>\r\n               <a class=\"addthis_counter addthis_pill_style\"></a>\r\n               </div>\r\n               <script type=\"text/javascript\" src=\"http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-50af450141ce9366\"></script>");
     return section;
    }
   },
   Controls:{
    Snippet1:{
     Client:{
      main:function()
      {
       return Default.H2(List.ofArray([Default.Text("Hello World!")]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client.main();
      }
     })
    },
    Snippet10:{
     Client:{
      factFold:function(n)
      {
       return Arrays.fold(function(x)
       {
        return function(y)
        {
         return x*y;
        };
       },1,Seq.toArray(Operators.range(1,n)));
      },
      factRec:function(n)
      {
       if(n<2)
        {
         return 1;
        }
       else
        {
         return n*Client1.factRec(n-1);
        }
      },
      main:function()
      {
       var input,_this,_this1,recSpan,foldSpan,button,x,_this2,f,x1,_this3;
       input=Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","text")),(_this1=HTML5.Attr(),_this1.NewAttr("autofocus","autofocus"))]));
       recSpan=Default.Span(Runtime.New(T,{
        $:0
       }));
       foldSpan=Default.Span(Runtime.New(T,{
        $:0
       }));
       button=(x=Default.Button(List.ofArray([Default.Text("Factorial"),Default.Attr().Class("btn btn-primary"),(_this2=Default.Attr(),_this2.NewAttr("style","margin-left: 8px;"))])),(f=(x1=function()
       {
        return function()
        {
         var v;
         v=input.get_Value()<<0;
         recSpan.set_Text("Recursion: "+Global.String(Client1.factRec(v)));
         return foldSpan.set_Text("Array.fold: "+Global.String(Client1.factFold(v)));
        };
       },function(arg10)
       {
        return EventsPervasives.Events().OnClick(x1,arg10);
       }),(f(x),x)));
       return Default.Div(List.ofArray([Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("form-inline")])),List.ofArray([input,button])),Operators1.add(Default.Div(List.ofArray([(_this3=Default.Attr(),_this3.NewAttr("style","margin-top: 8px;"))])),List.ofArray([recSpan,Default.Br(Runtime.New(T,{
        $:0
       })),foldSpan]))]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client1.main();
      }
     })
    },
    Snippet11:{
     Client:{
      main:function()
      {
       var _this;
       return Operators1.add(Operators1.add(Default.Table(List.ofArray([Default.Attr().Class("table table-bordered table-striped"),(_this=Default.Attr(),_this.NewAttr("style","width: 900px;"))])),List.ofArray([Operators1.add(Default.TR(Runtime.New(T,{
        $:0
       })),List.map(function(txt)
       {
        return Client2.th(txt);
       },List.ofArray(["Level","Core","CSS","Events","HTML","Selectors-API"])))])),List.map(function(level)
       {
        return Client2.tr(level);
       },List.ofArray(["1.0","2.0","3.0"])));
      },
      th:function(txt)
      {
       return Default.TH(List.ofArray([Default.Text(txt)]));
      },
      tr:function(level)
      {
       var implementation,x,x1,f,mapping,f1;
       implementation=document.implementation;
       x=(x1=List.ofArray(["Core","CSS","Events","HTML","Selectors-API"]),(f=(mapping=function(feature)
       {
        var rslt,x2;
        rslt=implementation.hasFeature(feature,level);
        return Default.TD(List.ofArray([(x2=Global.String(rslt),Default.Text(x2))]));
       },function(list)
       {
        return List.map(mapping,list);
       }),f(x1)));
       f1=function(tds)
       {
        return Operators1.add(Default.TR(List.ofArray([Client2.th(level)])),tds);
       };
       return f1(x);
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
         var f,action;
         _.fillStyle=_1;
         _.beginPath();
         (Runtime.Tupled(function(tupledArg)
         {
          var arg00,arg01;
          arg00=tupledArg[0];
          arg01=tupledArg[1];
          return _.moveTo(arg00,arg01);
         }))(moveTo);
         f=(action=Runtime.Tupled(function(tupledArg)
         {
          var x,y;
          x=tupledArg[0];
          y=tupledArg[1];
          return _.lineTo(x,y);
         }),function(list)
         {
          return Seq.iter(action,list);
         });
         f(coords);
         _.closePath();
         return _.fill();
        };
       }))([_2,_3]))(_4);
      },
      main:function()
      {
       var elt,_this,x,objectArg,arg00,canvas,ctx;
       elt=(_this=HTML5.Tags(),(x=List.ofArray([Default.Text("The canvas tag isn't supported by your browser.")]),_this.NewTag("canvas",x)));
       objectArg=elt["HtmlProvider@32"];
       (arg00=elt.Body,function(arg10)
       {
        return objectArg.SetStyle(arg00,arg10);
       })("border: 1px solid;");
       canvas=elt.Body;
       canvas.height=400;
       canvas.width=600;
       ctx=canvas.getContext("2d");
       Client3.drawLogo(ctx);
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
    Snippet3:{
     Client:{
      main:function()
      {
       var location,_this;
       location=window.location;
       return Operators1.add(Default.Table(List.ofArray([Default.Attr().Class("table table-bordered table-striped"),(_this=Default.Attr(),_this.NewAttr("style","width: 700px;"))])),List.ofArray([Default.TR(List.ofArray([Default.TH(List.ofArray([Default.Text("Property")])),Default.TH(List.ofArray([Default.Text("Value")]))])),Client4.tr("Hash",location.hash),Client4.tr("Host",location.host),Client4.tr("Hostname",location.hostname),Client4.tr("Href",location.href),Client4.tr("Pathname",location.pathname),Client4.tr("Port",location.port),Client4.tr("Protocol",location.protocol),Client4.tr("Search",location.search)]));
      },
      tr:function(td,_td_)
      {
       return Default.TR(List.ofArray([Default.TD(List.ofArray([Default.Text(td)])),Default.TD(List.ofArray([Default.Text(_td_)]))]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client4.main();
      }
     })
    },
    Snippet4:{
     Client:{
      handleTweetActions:function()
      {
       var jquery;
       jquery=jQuery("a.tweet-action");
       return jquery.click(function(event)
       {
        var href,x,f;
        event.preventDefault();
        href=this.getAttribute("href");
        x=window.showModalDialog(href);
        f=function(value)
        {
         value;
        };
        return f(x);
       });
      },
      li:function(tweet)
      {
       var id,name,screenName,profileLink,replyLink,retweetLink,favoriteLink,p,_this,x,_this1,x1,x2,_this2,_this3,_this4;
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
       return Operators1.add(Default.LI(List.ofArray([Default.Attr().Class("tweet")])),List.ofArray([Default.Div(List.ofArray([Operators1.add(Operators1.add(Default.A(List.ofArray([Default.HRef(profileLink),Default.Attr().Class("profile-link"),(_this=Default.Attr(),_this.NewAttr("target","_blank"))])),List.ofArray([Default.Img(List.ofArray([Default.Src(tweet.Avatar),Default.Alt(name),Default.Attr().Class("avatar")])),(x=List.ofArray([Default.Text(name)]),(_this1=Default.Tags(),_this1.NewTag("strong",x)))])),List.ofArray([(x1=" @"+screenName,Default.Text(x1))])),Default.Br(Runtime.New(T,{
        $:0
       })),(x2=List.ofArray([Default.Text(tweet.Date)]),(_this2=Default.Tags(),_this2.NewTag("small",x2))),p,Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("tweet-actions")])),List.ofArray([Operators1.add(Default.A(List.ofArray([Default.HRef(replyLink),Default.Attr().Class("tweet-action"),(_this3=Default.Attr(),_this3.NewAttr("style","margin-right: 5px;"))])),List.ofArray([Default.Text("Reply")])),Operators1.add(Default.A(List.ofArray([Default.HRef(retweetLink),Default.Attr().Class("tweet-action"),(_this4=Default.Attr(),_this4.NewAttr("style","margin-right: 5px;"))])),List.ofArray([Default.Text("Retweet")])),Operators1.add(Default.A(List.ofArray([Default.HRef(favoriteLink),Default.Attr().Class("tweet-action")])),List.ofArray([Default.Text("Favorite")]))]))]))]));
      },
      main:function()
      {
       var x,f,f1;
       x=Default.Div(List.ofArray([Default.Id("tweets"),Default.Attr().Class("span6")]));
       f=(f1=function(elt)
       {
        var x1,f2,f5;
        x1=(f2=function()
        {
         var x2,f3;
         x2=Remoting.Async("Website:0",[]);
         f3=function(_arg1)
         {
          var tweets,ul,_this,f4,action;
          if(_arg1.$==1)
           {
            tweets=_arg1.$0;
            ul=Default.UL(List.ofArray([(_this=Default.Attr(),_this.NewAttr("style","list-style-type: none;"))]));
            f4=(action=function(tweet)
            {
             return ul.AppendI(Client5.li(tweet));
            },function(list)
            {
             return Seq.iter(action,list);
            });
            f4(tweets);
            elt.AppendI(ul);
            Client5.toggleActionsVisibility();
            Client5.handleTweetActions();
            return Concurrency.Return(null);
           }
          else
           {
            alert("Failed to fetch the latest tweets.");
            return Concurrency.Return(null);
           }
         };
         return Concurrency.Bind(x2,f3);
        },Concurrency.Delay(f2));
        f5=function(arg00)
        {
         var t;
         t={
          $:0
         };
         return Concurrency.Start(arg00);
        };
        return f5(x1);
       },function(w)
       {
        return Operators1.OnAfterRender(f1,w);
       });
       f(x);
       return x;
      },
      toggleActionsVisibility:function()
      {
       var jquery;
       jquery=jQuery(".tweet");
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
       return Client5.main();
      }
     })
    },
    Snippet5:{
     Client:{
      main:function()
      {
       var input,_this,_this1,_this2,btn,x,_this3,f,x1,x2,_this4,x3,x4,_this5,_this6;
       input=Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("value","Hello console!")),(_this1=Default.Attr(),_this1.NewAttr("type","text")),(_this2=HTML5.Attr(),_this2.NewAttr("autofocus","autofocus"))]));
       btn=(x=Default.Button(List.ofArray([Default.Text("Log"),Default.Attr().Class("btn btn-primary"),(_this3=Default.Attr(),_this3.NewAttr("type","button"))])),(f=(x1=function()
       {
        return function()
        {
         return JavaScript.Log(input.get_Value());
        };
       },function(arg10)
       {
        return EventsPervasives.Events().OnClick(x1,arg10);
       }),(f(x),x)));
       return Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("span5")])),List.ofArray([(x2=List.ofArray([Default.Text("Log messages to the console")]),(_this4=Default.Tags(),_this4.NewTag("legend",x2))),(x3=List.ofArray([(x4=List.ofArray([Default.Text("Message")]),(_this5=Default.Tags(),_this5.NewTag("label",x4))),input]),(_this6=Default.Tags(),_this6.NewTag("fieldset",x3))),btn]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client6.main();
      }
     })
    },
    Snippet6:{
     Client:{
      display:function(p)
      {
       var coords,txt,copyOfStruct,txt1,copyOfStruct1,txt2,txt3,copyOfStruct2,txt4,txt5,txt6,txt7;
       coords=p.coords;
       txt=(copyOfStruct=[coords.longitude],String(copyOfStruct[0]));
       Client7.setText("longitude",txt);
       txt1=(copyOfStruct1=[coords.latitude],String(copyOfStruct1[0]));
       Client7.setText("latitude",txt1);
       txt2=Client7.toStr(coords.altitude);
       Client7.setText("altitude",txt2);
       txt3=(copyOfStruct2=[coords.accuracy],String(copyOfStruct2[0]));
       Client7.setText("accuracy",txt3);
       txt4=Client7.toStr(coords.altitudeAccuracy);
       Client7.setText("alt-acc",txt4);
       txt5=Client7.toStr(coords.heading);
       Client7.setText("heading",txt5);
       txt6=Client7.toStr(coords.speed);
       Client7.setText("speed",txt6);
       txt7=p.timestamp.toString();
       return Client7.setText("timestamp",txt7);
      },
      getPosition:function()
      {
       var f;
       f=function()
       {
        window.navigator.geolocation.getCurrentPosition(function(p)
        {
         return Client7.display(p);
        });
        return Concurrency.Return(null);
       };
       return Concurrency.Delay(f);
      },
      main:function()
      {
       var x,f,x1;
       return Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("span6")])),List.ofArray([Operators1.add(Default.Table(List.ofArray([Default.Attr().Class("table table-striped table-bordered")])),List.ofArray([Client7.tr("Longitude","longitude"),Client7.tr("Latitude","latitude"),Client7.tr("Altitude","altitude"),Client7.tr("Accuracy","accuracy"),Client7.tr("Altitude Accuracy","alt-acc"),Client7.tr("Heading","heading"),Client7.tr("Speed","speed"),Client7.tr("Time Stamp","timestamp")])),(x=Default.Button(List.ofArray([Default.Text("Track My Location"),Default.Attr().Class("btn btn-primary btn-large")])),(f=(x1=function()
       {
        return function()
        {
         var x2,f1,f3;
         x2=(f1=function()
         {
          var x3,f2;
          x3=Client7.getPosition();
          f2=function()
          {
           return Concurrency.Return(null);
          };
          return Concurrency.Bind(x3,f2);
         },Concurrency.Delay(f1));
         f3=function(arg00)
         {
          var t;
          t={
           $:0
          };
          return Concurrency.Start(arg00);
         };
         return f3(x2);
        };
       },function(arg10)
       {
        return EventsPervasives.Events().OnClick(x1,arg10);
       }),(f(x),x)))]));
      },
      setText:function(id,txt)
      {
       document.getElementById(id).textContent=txt;
      },
      toStr:function(f)
      {
       var x,f1;
       x=String(f);
       f1=function(_arg1)
       {
        if(_arg1==="null")
         {
          return"NA";
         }
        else
         {
          return _arg1;
         }
       };
       return f1(x);
      },
      tr:function(thTxt,tdId)
      {
       var _this,_this1;
       return Default.TR(List.ofArray([Default.TH(List.ofArray([Default.Text(thTxt)])),Default.TD(List.ofArray([(_this=Default.Attr(),_this.NewAttr("id",tdId)),(_this1=Default.Attr(),_this1.NewAttr("style","width: 250px;"))]))]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client7.main();
      }
     })
    },
    Snippet7:{
     Client:{
      main:function()
      {
       var elt,_this,x,_this1,_this2,_this3,x1,_this4,_this5,video;
       elt=Operators1.add((_this=HTML5.Tags(),(x=List.ofArray([(_this1=Default.Attr(),_this1.NewAttr("height","360px")),(_this2=Default.Attr(),_this2.NewAttr("width","640px"))]),_this.NewTag("video",x))),List.ofArray([(_this3=HTML5.Tags(),(x1=List.ofArray([(_this4=Default.Attr(),_this4.NewAttr("src","/Videos/madagascar.mp4")),(_this5=Default.Attr(),_this5.NewAttr("type","video/mp4"))]),_this3.NewTag("source",x1)))]));
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
       return Client8.main();
      }
     })
    },
    Snippet8:{
     Client:{
      append:function(id,btn)
      {
       var x,f;
       x=document.getElementById(id).appendChild(btn.Body);
       f=function(value)
       {
        value;
       };
       return f(x);
      },
      connect:function(msgText)
      {
       var ws,sendBtn,x,f,x1,disconnectBtn,x2,f1,x3;
       document.getElementById("connect-btn").setAttribute("disabled","disabled");
       ws=new WebSocket("ws://echo.websocket.org");
       sendBtn=(x=Default.Button(List.ofArray([Default.Text("Send"),Default.Attr().Class("btn btn-primary")])),(f=(x1=function()
       {
        return function()
        {
         var txt;
         txt=msgText.get_Value();
         ws.send(txt);
         return Client9.log("Sent: "+txt,"black");
        };
       },function(arg10)
       {
        return EventsPervasives.Events().OnClick(x1,arg10);
       }),(f(x),x)));
       disconnectBtn=(x2=Default.Button(List.ofArray([Default.Text("Disconnect"),Default.Attr().Class("btn btn-warning")])),(f1=(x3=function()
       {
        return function()
        {
         return ws.close();
        };
       },function(arg10)
       {
        return EventsPervasives.Events().OnClick(x3,arg10);
       }),(f1(x2),x2)));
       return Client9.handleEvents(ws,disconnectBtn,sendBtn);
      },
      handleEvents:function(ws,disconnectBtn,sendBtn)
      {
       ws.onerror=function()
       {
        return Client9.log("Error","red");
       };
       ws.onmessage=function(msg)
       {
        return Client9.log("Received: "+String(msg.data),"blue");
       };
       ws.onopen=function()
       {
        Client9.append("send-btn",sendBtn);
        Client9.append("btns",disconnectBtn);
        return Client9.log("Connected","green");
       };
       ws.onclose=function()
       {
        document.getElementById("connect-btn").removeAttribute("disabled");
        sendBtn["HtmlProvider@32"].Remove(sendBtn.Body);
        disconnectBtn["HtmlProvider@32"].Remove(disconnectBtn.Body);
        return Client9.log("Disconnected","rgb(250, 167, 50)");
       };
      },
      log:function(text,color)
      {
       var x,x1,arg00,_this,f,f1;
       x=(x1=Default.P(List.ofArray([Default.Text(text),(arg00="color: "+color,(_this=Default.Attr(),_this.NewAttr("style",arg00)))])),(f=function(p)
       {
        return document.getElementById("ws-log").appendChild(p.Body);
       },f(x1)));
       f1=function(value)
       {
        value;
       };
       return f1(x);
      },
      main:function()
      {
       var msgText,_this,logDiv,_this1,_this2,_this3,x,_this4,_this5,f,x1,x2,_this6,_this7,_this8,_this9,_thisa,x3,_thisb,_thisc,x4,_thisd,f1,x5;
       msgText=Default.TextArea(List.ofArray([Default.Text("Hello WebSocket"),(_this=Default.Attr(),_this.NewAttr("id","msg"))]));
       logDiv=Default.Div(List.ofArray([(_this1=Default.Attr(),_this1.NewAttr("id","ws-log"))]));
       return Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("row")])),List.ofArray([Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("span4")])),List.ofArray([Operators1.add(Default.Div(List.ofArray([(_this2=Default.Attr(),_this2.NewAttr("style","margin-bottom: 10px;")),(_this3=Default.Attr(),_this3.NewAttr("id","btns"))])),List.ofArray([(x=Default.Button(List.ofArray([Default.Text("Connect"),(_this4=Default.Attr(),_this4.NewAttr("id","connect-btn")),Default.Attr().Class("btn btn-success"),(_this5=Default.Attr(),_this5.NewAttr("style","margin-right: 10px;"))])),(f=(x1=function()
       {
        return function()
        {
         return Client9.connect(msgText);
        };
       },function(arg10)
       {
        return EventsPervasives.Events().OnClick(x1,arg10);
       }),(f(x),x)))])),(x2=List.ofArray([Default.Text("Message:"),(_this6=Default.Attr(),_this6.NewAttr("style","font-weight: bold;"))]),(_this7=Default.Tags(),_this7.NewTag("label",x2))),msgText,Default.Div(List.ofArray([(_this8=Default.Attr(),_this8.NewAttr("id","send-btn"))]))])),Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("span5"),(_this9=Default.Attr(),_this9.NewAttr("style","border-left: 1px solid lightgray;"))])),List.ofArray([Operators1.add(Default.Div(List.ofArray([(_thisa=Default.Attr(),_thisa.NewAttr("style","margin-left: 20px;"))])),List.ofArray([(x3=List.ofArray([Default.Text("Log:"),(_thisb=Default.Attr(),_thisb.NewAttr("style","font-weight: bold;"))]),(_thisc=Default.Tags(),_thisc.NewTag("label",x3))),logDiv,(x4=Default.Button(List.ofArray([Default.Text("Clear"),(_thisd=Default.Attr(),_thisd.NewAttr("style","margin-top: 10px;")),Default.Attr().Class("btn")])),(f1=(x5=function()
       {
        return function()
        {
         return logDiv.set_Html("");
        };
       },function(arg10)
       {
        return EventsPervasives.Events().OnClick(x5,arg10);
       }),(f1(x4),x4)))]))]))]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client9.main();
      }
     })
    },
    Snippet9:{
     Client:{
      main:function()
      {
       var x,f,x1;
       x=Default.Button(List.ofArray([Default.Text("Show Modal Dialog"),Default.Attr().Class("btn btn-primary")]));
       f=(x1=function()
       {
        return function()
        {
         var x2,f1;
         x2=window.showModalDialog("/modal.html");
         f1=function(value)
         {
          value;
         };
         return f1(x2);
        };
       },function(arg10)
       {
        return EventsPervasives.Events().OnClick(x1,arg10);
       });
       f(x);
       return x;
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Clienta.main();
      }
     })
    }
   },
   Forkme:{
    Control:Runtime.Class({
     get_Body:function()
     {
      return Forkme.main();
     }
    }),
    main:function()
    {
     var _this,_this1;
     return Operators1.add(Default.A(List.ofArray([Default.HRef("https://github.com/TahaHachana/WS-Snippets"),(_this=Default.Attr(),_this.NewAttr("target","_blank"))])),List.ofArray([Default.Img(List.ofArray([Default.Src("https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"),Default.Alt("Fork me on GitHub"),Default.Id("forkme"),(_this1=Default.Attr(),_this1.NewAttr("style","z-index: 2000;"))]))]));
    }
   },
   Highlight:{
    Client:{
     clearBtn:function()
     {
      var x,el,_this,inner,f,x1;
      x=(el=Default.Button(List.ofArray([Default.Attr().Class("btn btn-large"),(_this=Default.Attr(),_this.NewAttr("style","margin-left: 10px;"))])),(inner=Default.Text("Clear"),Operators1.add(el,List.ofArray([inner]))));
      f=(x1=function()
      {
       return function()
       {
        return jQuery("#code-textarea").val("");
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnClick(x1,arg10);
      });
      f(x);
      return x;
     },
     highlightBtn:function()
     {
      var x,el,inner,f,x1;
      x=(el=Default.Button(List.ofArray([Default.Attr().Class("btn btn-primary btn-large")])),(inner=Default.Text("Highlight"),Operators1.add(el,List.ofArray([inner]))));
      f=(x1=function(elt)
      {
       return function()
       {
        var x2,f1,f6;
        x2=(f1=function()
        {
         var objectArg,arg00,loaderJq,htmlJq,previewJq,code,x3,f2,x4,f3;
         objectArg=elt["HtmlProvider@32"];
         ((arg00=elt.Body,function(arg10)
         {
          return function(arg20)
          {
           return objectArg.SetAttribute(arg00,arg10,arg20);
          };
         })("disabled"))("disabled");
         loaderJq=jQuery("#loader");
         loaderJq.css("visibility","visible");
         htmlJq=jQuery("#html-textarea");
         previewJq=jQuery("#html-preview");
         htmlJq.val("");
         previewJq.html("");
         code=(x3=jQuery("#code-textarea").val(),(f2=function(value)
         {
          return Global.String(value);
         },f2(x3)));
         x4=Remoting.Async("Website:1",[code]);
         f3=function(_arg1)
         {
          var a,html,b,f4,f5;
          loaderJq.css("visibility","hidden");
          a=_arg1.$==1?(html=_arg1.$0,(htmlJq.val(html).click(function()
          {
           return htmlJq.select();
          }),(previewJq.html(html),Concurrency.Return(null)))):(alert("An error occured."),Concurrency.Return(null));
          b=(f4=function()
          {
           var objectArg1,arg001;
           objectArg1=elt["HtmlProvider@32"];
           (arg001=elt.Body,function(arg10)
           {
            return objectArg1.RemoveAttribute(arg001,arg10);
           })("disabled");
           return Concurrency.Return(null);
          },Concurrency.Delay(f4));
          f5=function()
          {
           return b;
          };
          return Concurrency.Bind(a,f5);
         };
         return Concurrency.Bind(x4,f3);
        },Concurrency.Delay(f1));
        f6=function(arg00)
        {
         var t;
         t={
          $:0
         };
         return Concurrency.Start(arg00);
        };
        return f6(x2);
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnClick(x1,arg10);
      });
      f(x);
      return x;
     },
     main:function()
     {
      return Default.Div(List.ofArray([Clientb.highlightBtn(),Clientb.clearBtn()]));
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Clientb.main();
     }
    })
   },
   Index:{
    Client:{
     main:function()
     {
      var id,x,f,title,x1,f1,desc,x2,f2,code,x3,f3,formlet1,x4,x5,x6,f4,f5;
      id=(x=Controls1.Input(""),(f=function(formlet)
      {
       return Enhance.WithTextLabel("Id",formlet);
      },f(x)));
      title=(x1=Controls1.Input(""),(f1=function(formlet)
      {
       return Enhance.WithTextLabel("Title",formlet);
      },f1(x1)));
      desc=(x2=Controls1.TextArea(""),(f2=function(formlet)
      {
       return Enhance.WithTextLabel("Description",formlet);
      },f2(x2)));
      code=(x3=Controls1.TextArea(""),(f3=function(formlet)
      {
       return Enhance.WithTextLabel("Code",formlet);
      },f3(x3)));
      formlet1=(x4=(x5=Data.$(Data.$(Data.$(Data.$((x6=function(id1)
      {
       return function(title1)
       {
        return function(desc1)
        {
         return function(code1)
         {
          return[id1,title1,desc1,code1];
         };
        };
       };
      },Formlet1.Return(x6)),id),title),desc),code),(f4=function(formlet)
      {
       return Enhance.WithSubmitAndResetButtons(formlet);
      },f4(x5))),(f5=function(formlet)
      {
       return Enhance.WithFormContainer(formlet);
      },f5(x4)));
      return Formlet1.Run(Runtime.Tupled(function(x7)
      {
       var x8,f6,f8;
       x8=(f6=function()
       {
        var x9,id1,title1,desc1,code1,f7;
        x9=(id1=x7[0],(title1=x7[1],(desc1=x7[2],(code1=x7[3],Remoting.Async("Website:4",[id1,title1,desc1,code1])))));
        f7=function()
        {
         alert("Document indexed.");
         return Concurrency.Return(null);
        };
        return Concurrency.Bind(x9,f7);
       },Concurrency.Delay(f6));
       f8=function(arg00)
       {
        var t;
        t={
         $:0
        };
        return Concurrency.Start(arg00);
       };
       return f8(x8);
      }),formlet1);
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Clientc.main();
     }
    })
   },
   InsertSnippet:{
    Client:{
     main:function()
     {
      var id,x,f,title,x1,f1,metaDesc,x2,f2,desc,x3,f3,descHtml,x4,f4,tags,x5,f5,formlet1,x6,x7,x8,f6,f7;
      id=(x=Controls1.Input(""),(f=function(formlet)
      {
       return Enhance.WithTextLabel("Id",formlet);
      },f(x)));
      title=(x1=Controls1.Input(""),(f1=function(formlet)
      {
       return Enhance.WithTextLabel("Title",formlet);
      },f1(x1)));
      metaDesc=(x2=Controls1.Input(""),(f2=function(formlet)
      {
       return Enhance.WithTextLabel("Meta Description",formlet);
      },f2(x2)));
      desc=(x3=Controls1.TextArea(""),(f3=function(formlet)
      {
       return Enhance.WithTextLabel("Description",formlet);
      },f3(x3)));
      descHtml=(x4=Controls1.TextArea(""),(f4=function(formlet)
      {
       return Enhance.WithTextLabel("Description HTML",formlet);
      },f4(x4)));
      tags=(x5=Controls1.Input(""),(f5=function(formlet)
      {
       return Enhance.WithTextLabel("Tags",formlet);
      },f5(x5)));
      formlet1=(x6=(x7=Data.$(Data.$(Data.$(Data.$(Data.$(Data.$((x8=function(id1)
      {
       return function(title1)
       {
        return function(metaDesc1)
        {
         return function(desc1)
         {
          return function(descHtml1)
          {
           return function(tags1)
           {
            return[id1,title1,metaDesc1,desc1,descHtml1,tags1];
           };
          };
         };
        };
       };
      },Formlet1.Return(x8)),id),title),metaDesc),desc),descHtml),tags),(f6=function(formlet)
      {
       return Enhance.WithSubmitAndResetButtons(formlet);
      },f6(x7))),(f7=function(formlet)
      {
       return Enhance.WithFormContainer(formlet);
      },f7(x6)));
      return Formlet1.Run(Runtime.Tupled(function(x9)
      {
       var xa,f8,fa;
       xa=(f8=function()
       {
        var xb,id1,title1,metaDesc1,desc1,descHtml1,tags1,f9;
        JavaScript.Log(x9);
        xb=(id1=x9[0],(title1=x9[1],(metaDesc1=x9[2],(desc1=x9[3],(descHtml1=x9[4],(tags1=x9[5],Remoting.Async("Website:3",[id1,title1,metaDesc1,desc1,descHtml1,tags1])))))));
        f9=function(_arg1)
        {
         if(_arg1)
          {
           alert("New snippet inserted successfully.");
           return Concurrency.Return(null);
          }
         else
          {
           alert("The query failed.");
           return Concurrency.Return(null);
          }
        };
        return Concurrency.Bind(xb,f9);
       },Concurrency.Delay(f8));
       fa=function(arg00)
       {
        var t;
        t={
         $:0
        };
        return Concurrency.Start(arg00);
       };
       return fa(xa);
      }),formlet1);
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Clientd.main();
     }
    })
   },
   Login:{
    Client:{
     loginForm:function(redirectUrl)
     {
      var userInput,_this,_this1,_this2,submitBtn,x,_this3,f,x1,x4,x5,_this4,x6,_this5,x7,_this6,_this7,x8,_this8;
      userInput=Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","text")),(_this1=HTML5.Attr(),_this1.NewAttr("autofocus","autofocus")),(_this2=HTML5.Attr(),_this2.NewAttr("placeholder","username"))]));
      submitBtn=(x=Operators1.add(Default.Button(List.ofArray([(_this3=Default.Attr(),_this3.NewAttr("type","button")),Default.Attr().Class("btn"),Default.Id("login-btn")])),List.ofArray([Default.Text("Submit")])),(f=(x1=function()
      {
       return function()
       {
        var x2,f1,f3;
        x2=(f1=function()
        {
         var x3,f2;
         x3=Remoting.Async("Website:2",[{
          Name:userInput.get_Value(),
          Password:Cliente.passInput().get_Value()
         }]);
         f2=function(_arg11)
         {
          if(_arg11.$==1)
           {
            window.location.href=redirectUrl;
            return Concurrency.Return(null);
           }
          else
           {
            alert("Login failed");
            return Concurrency.Return(null);
           }
         };
         return Concurrency.Bind(x3,f2);
        },Concurrency.Delay(f1));
        f3=function(arg00)
        {
         var t;
         t={
          $:0
         };
         return Concurrency.Start(arg00);
        };
        return f3(x2);
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnClick(x1,arg10);
      }),(f(x),x)));
      return Default.Form(List.ofArray([(x4=List.ofArray([(x5=List.ofArray([Default.Text("Login")]),(_this4=Default.Tags(),_this4.NewTag("legend",x5))),(x6=List.ofArray([Default.Text("Username")]),(_this5=Default.Tags(),_this5.NewTag("label",x6))),userInput,(x7=List.ofArray([Default.Text("Password")]),(_this6=Default.Tags(),_this6.NewTag("label",x7))),Cliente.passInput()]),(_this7=Default.Tags(),_this7.NewTag("fieldset",x4))),(x8=List.ofArray([submitBtn]),(_this8=Default.Tags(),_this8.NewTag("fieldset",x8)))]));
     },
     passInput:Runtime.Field(function()
     {
      var x,_this,_this1,f,x1;
      x=Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","text")),(_this1=HTML5.Attr(),_this1.NewAttr("placeholder","password"))]));
      f=(x1=function()
      {
       return function(keyCode)
       {
        var matchValue;
        matchValue=keyCode.KeyCode;
        if(matchValue===13)
         {
          return jQuery("#login-btn").click();
         }
        else
         {
          return null;
         }
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnKeyDown(x1,arg10);
      });
      f(x);
      return x;
     })
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Cliente.loginForm(this.redirectUrl);
     }
    })
   },
   Search:{
    Client:{
     main:function()
     {
      var inp,x,_this,_this1,_this2,_this3,f,x1,x3,_this4,_this5,f2,x4,_this7;
      inp=(x=Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("id","query")),(_this1=Default.Attr(),_this1.NewAttr("type","text")),Default.Attr().Class("input-xxlarge search-query"),(_this2=HTML5.Attr(),_this2.NewAttr("autofocus","autofocus")),(_this3=Default.Attr(),_this3.NewAttr("style","font-size: 30px; height: 40px"))])),(f=(x1=function(elt)
      {
       return function(key)
       {
        var matchValue,query,x2,f1;
        matchValue=key.KeyCode;
        if(matchValue===13)
         {
          query=(x2=elt.get_Value(),(f1=function(uri)
          {
           return encodeURIComponent(uri);
          },f1(x2)));
          window.location.href="/search/"+query+"/1";
         }
        else
         {
          return null;
         }
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnKeyUp(x1,arg10);
      }),(f(x),x)));
      return Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("form-search")])),List.ofArray([Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("input-append")])),List.ofArray([inp,(x3=Default.Button(List.ofArray([Default.Text("Search"),(_this4=Default.Attr(),_this4.NewAttr("type","button")),Default.Attr().Class("btn btn-success"),(_this5=Default.Attr(),_this5.NewAttr("style","height: 50px; font-size: 20px;"))])),(f2=(x4=function()
      {
       return function()
       {
        var q,x2,_this6,f1;
        q=(x2=(_this6=inp.get_Value(),Strings.Trim(_this6)),(f1=function(uri)
        {
         return encodeURIComponent(uri);
        },f1(x2)));
        window.location.href="/search/"+q+"/1";
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnClick(x4,arg10);
      }),(f2(x3),x3)))])),Default.Script(List.ofArray([(_this7=Default.Attr(),_this7.NewAttr("src","Scripts/AutoComplete.js"))]))]));
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Clientf.main();
     }
    })
   }
  }
 });
 Runtime.OnInit(function()
 {
  Website=Runtime.Safe(Global.Website);
  AddThis=Runtime.Safe(Website.AddThis);
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Html=Runtime.Safe(WebSharper.Html);
  Default=Runtime.Safe(Html.Default);
  HTML5=Runtime.Safe(Default.HTML5);
  List=Runtime.Safe(WebSharper.List);
  T=Runtime.Safe(List.T);
  Controls=Runtime.Safe(Website.Controls);
  Snippet1=Runtime.Safe(Controls.Snippet1);
  Client=Runtime.Safe(Snippet1.Client);
  Arrays=Runtime.Safe(WebSharper.Arrays);
  Seq=Runtime.Safe(WebSharper.Seq);
  Operators=Runtime.Safe(WebSharper.Operators);
  Snippet10=Runtime.Safe(Controls.Snippet10);
  Client1=Runtime.Safe(Snippet10.Client);
  EventsPervasives=Runtime.Safe(Html.EventsPervasives);
  Operators1=Runtime.Safe(Html.Operators);
  Snippet11=Runtime.Safe(Controls.Snippet11);
  Client2=Runtime.Safe(Snippet11.Client);
  document=Runtime.Safe(Global.document);
  Snippet2=Runtime.Safe(Controls.Snippet2);
  Client3=Runtime.Safe(Snippet2.Client);
  window=Runtime.Safe(Global.window);
  Snippet3=Runtime.Safe(Controls.Snippet3);
  Client4=Runtime.Safe(Snippet3.Client);
  jQuery=Runtime.Safe(Global.jQuery);
  Remoting=Runtime.Safe(WebSharper.Remoting);
  Snippet4=Runtime.Safe(Controls.Snippet4);
  Client5=Runtime.Safe(Snippet4.Client);
  Concurrency=Runtime.Safe(WebSharper.Concurrency);
  alert=Runtime.Safe(Global.alert);
  JavaScript=Runtime.Safe(WebSharper.JavaScript);
  Snippet5=Runtime.Safe(Controls.Snippet5);
  Client6=Runtime.Safe(Snippet5.Client);
  String=Runtime.Safe(Global.String);
  Snippet6=Runtime.Safe(Controls.Snippet6);
  Client7=Runtime.Safe(Snippet6.Client);
  Snippet7=Runtime.Safe(Controls.Snippet7);
  Client8=Runtime.Safe(Snippet7.Client);
  WebSocket=Runtime.Safe(Global.WebSocket);
  Snippet8=Runtime.Safe(Controls.Snippet8);
  Client9=Runtime.Safe(Snippet8.Client);
  Snippet9=Runtime.Safe(Controls.Snippet9);
  Clienta=Runtime.Safe(Snippet9.Client);
  Forkme=Runtime.Safe(Website.Forkme);
  Highlight=Runtime.Safe(Website.Highlight);
  Clientb=Runtime.Safe(Highlight.Client);
  Formlet=Runtime.Safe(WebSharper.Formlet);
  Controls1=Runtime.Safe(Formlet.Controls);
  Enhance=Runtime.Safe(Formlet.Enhance);
  Data=Runtime.Safe(Formlet.Data);
  Formlet1=Runtime.Safe(Formlet.Formlet);
  Index=Runtime.Safe(Website.Index);
  Clientc=Runtime.Safe(Index.Client);
  InsertSnippet=Runtime.Safe(Website.InsertSnippet);
  Clientd=Runtime.Safe(InsertSnippet.Client);
  Login=Runtime.Safe(Website.Login);
  Cliente=Runtime.Safe(Login.Client);
  encodeURIComponent=Runtime.Safe(Global.encodeURIComponent);
  Strings=Runtime.Safe(WebSharper.Strings);
  Search=Runtime.Safe(Website.Search);
  return Clientf=Runtime.Safe(Search.Client);
 });
 Runtime.OnLoad(function()
 {
  Cliente.passInput();
 });
}());
