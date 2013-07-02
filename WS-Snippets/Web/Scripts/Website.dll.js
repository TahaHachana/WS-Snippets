(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,Website,AddThis,WebSharper,Html,Default,HTML5,List,T,Controls,Snippet1,Client,Snippet2,Client1,Seq,window,Operators,Snippet3,Client2,jQuery,Remoting,Snippet4,Client3,Concurrency,alert,JavaScript,EventsPervasives,Snippet5,Client4,String,Snippet6,Client5,document,Snippet7,Client6,Forkme,Highlight,Client7,Formlet,Controls1,Enhance,Data,Formlet1,Index,Client8,InsertSnippet,Client9,Login,Clienta,Search,Clientb,Strings,encodeURIComponent,Arrays;
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
     section.set_Html("<div class=\"addthis_toolbox addthis_default_style \">\r\n               <a class=\"addthis_button_facebook_like\" fb:like:layout=\"button_count\"></a>\r\n               <a class=\"addthis_button_tweet\"></a>\r\n               <a class=\"addthis_button_pinterest_pinit\"></a>\r\n               <a class=\"addthis_counter addthis_pill_style\"></a>\r\n               </div>\r\n               <script type=\"text/javascript\" src=\"http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-50af450141ce9366\"></script>");
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
    Snippet2:{
     Client:{
      drawLogo:function(ctx)
      {
       ctx.font="60px 'Gill Sans Ultra Bold'";
       ctx.fillText("HTML",40,60);
       ctx.translate(0,70);
       Client1.drawShape(ctx,"#E34C26",44,255,List.ofArray([[22,5],[267,5],[244,255],[144,283]]));
       Client1.drawShape(ctx,"#F06529",144,262,List.ofArray([[225,239],[244,25],[144,25]]));
       Client1.drawShape(ctx,"#EBEBEB",144,118,List.ofArray([[103,118],[101,87],[144,87],[144,56],[67,56],[75,149],[144,149]]));
       Client1.drawShape(ctx,"#EBEBEB",144,198,List.ofArray([[110,189],[108,164],[77,164],[81,212],[144,230]]));
       Client1.drawShape(ctx,"#FFFFFF",144,118,List.ofArray([[144,149],[182,149],[178,189],[144,198],[144,230],[207,212],[215,118]]));
       return Client1.drawShape(ctx,"#FFFFFF",144,56,List.ofArray([[144,87],[218,87],[221,56]]));
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
       Client1.drawLogo(ctx);
       return elt;
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client1.main();
      }
     })
    },
    Snippet3:{
     Client:{
      main:function()
      {
       var location;
       location=window.location;
       return Operators.add(Default.Table(List.ofArray([Default.Attr().Class("table table-bordered table-striped span8")])),List.ofArray([Default.TR(List.ofArray([Default.TH(List.ofArray([Default.Text("Property")])),Default.TH(List.ofArray([Default.Text("Value")]))])),Client2.tr("Hash",location.hash),Client2.tr("Host",location.host),Client2.tr("Hostname",location.hostname),Client2.tr("Href",location.href),Client2.tr("Pathname",location.pathname),Client2.tr("Port",location.port),Client2.tr("Protocol",location.protocol),Client2.tr("Search",location.search)]));
      },
      tr:function(td,_td_)
      {
       return Default.TR(List.ofArray([Default.TD(List.ofArray([Default.Text(td)])),Default.TD(List.ofArray([Default.Text(_td_)]))]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client2.main();
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
       return Operators.add(Default.LI(List.ofArray([Default.Attr().Class("tweet")])),List.ofArray([Default.Div(List.ofArray([Operators.add(Operators.add(Default.A(List.ofArray([Default.HRef(profileLink),Default.Attr().Class("profile-link"),(_this=Default.Attr(),_this.NewAttr("target","_blank"))])),List.ofArray([Default.Img(List.ofArray([Default.Src(tweet.Avatar),Default.Alt(name),Default.Attr().Class("avatar")])),(x=List.ofArray([Default.Text(name)]),(_this1=Default.Tags(),_this1.NewTag("strong",x)))])),List.ofArray([(x1=" @"+screenName,Default.Text(x1))])),Default.Br(Runtime.New(T,{
        $:0
       })),(x2=List.ofArray([Default.Text(tweet.Date)]),(_this2=Default.Tags(),_this2.NewTag("small",x2))),p,Operators.add(Default.Div(List.ofArray([Default.Attr().Class("tweet-actions")])),List.ofArray([Operators.add(Default.A(List.ofArray([Default.HRef(replyLink),Default.Attr().Class("tweet-action"),(_this3=Default.Attr(),_this3.NewAttr("style","margin-right: 5px;"))])),List.ofArray([Default.Text("Reply")])),Operators.add(Default.A(List.ofArray([Default.HRef(retweetLink),Default.Attr().Class("tweet-action"),(_this4=Default.Attr(),_this4.NewAttr("style","margin-right: 5px;"))])),List.ofArray([Default.Text("Retweet")])),Operators.add(Default.A(List.ofArray([Default.HRef(favoriteLink),Default.Attr().Class("tweet-action")])),List.ofArray([Default.Text("Favorite")]))]))]))]));
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
             return ul.AppendI(Client3.li(tweet));
            },function(list)
            {
             return Seq.iter(action,list);
            });
            f4(tweets);
            elt.AppendI(ul);
            Client3.toggleActionsVisibility();
            Client3.handleTweetActions();
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
        return Operators.OnAfterRender(f1,w);
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
       return Client3.main();
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
       return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("span5")])),List.ofArray([(x2=List.ofArray([Default.Text("Log messages to the console")]),(_this4=Default.Tags(),_this4.NewTag("legend",x2))),(x3=List.ofArray([(x4=List.ofArray([Default.Text("Message")]),(_this5=Default.Tags(),_this5.NewTag("label",x4))),input]),(_this6=Default.Tags(),_this6.NewTag("fieldset",x3))),btn]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client4.main();
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
       Client5.setText("longitude",txt);
       txt1=(copyOfStruct1=[coords.latitude],String(copyOfStruct1[0]));
       Client5.setText("latitude",txt1);
       txt2=Client5.toStr(coords.altitude);
       Client5.setText("altitude",txt2);
       txt3=(copyOfStruct2=[coords.accuracy],String(copyOfStruct2[0]));
       Client5.setText("accuracy",txt3);
       txt4=Client5.toStr(coords.altitudeAccuracy);
       Client5.setText("alt-acc",txt4);
       txt5=Client5.toStr(coords.heading);
       Client5.setText("heading",txt5);
       txt6=Client5.toStr(coords.speed);
       Client5.setText("speed",txt6);
       txt7=p.timestamp.toString();
       return Client5.setText("timestamp",txt7);
      },
      getPosition:function()
      {
       var f;
       f=function()
       {
        window.navigator.geolocation.getCurrentPosition(function(p)
        {
         return Client5.display(p);
        });
        return Concurrency.Return(null);
       };
       return Concurrency.Delay(f);
      },
      main:function()
      {
       var x,f,x1;
       return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("span6")])),List.ofArray([Operators.add(Default.Table(List.ofArray([Default.Attr().Class("table table-striped table-bordered")])),List.ofArray([Client5.tr("Longitude","longitude"),Client5.tr("Latitude","latitude"),Client5.tr("Altitude","altitude"),Client5.tr("Accuracy","accuracy"),Client5.tr("Altitude Accuracy","alt-acc"),Client5.tr("Heading","heading"),Client5.tr("Speed","speed"),Client5.tr("Time Stamp","timestamp")])),(x=Default.Button(List.ofArray([Default.Text("Track My Location"),Default.Attr().Class("btn btn-primary btn-large")])),(f=(x1=function()
       {
        return function()
        {
         var x2,f1,f3;
         x2=(f1=function()
         {
          var x3,f2;
          x3=Client5.getPosition();
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
       return Client5.main();
      }
     })
    },
    Snippet7:{
     Client:{
      main:function()
      {
       var elt,_this,x,_this1,_this2,video;
       elt=(_this=HTML5.Tags(),(x=List.ofArray([(_this1=Default.Attr(),_this1.NewAttr("height","360px")),(_this2=Default.Attr(),_this2.NewAttr("width","640px"))]),_this.NewTag("video",x)));
       video=elt.Body;
       video.src="http://www.html5videoplayer.net/videos/madagascar3.mp4";
       video.autoplay=false;
       video.controls=true;
       video.preload="metadata";
       video.poster="http://www.html5videoplayer.net/poster/madagascar3.jpg";
       return elt;
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client6.main();
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
     var _this;
     return Operators.add(Default.A(List.ofArray([Default.HRef("https://github.com/TahaHachana/WS-Snippets")])),List.ofArray([Default.Img(List.ofArray([Default.Src("https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"),Default.Alt("Fork me on GitHub"),Default.Id("forkme"),(_this=Default.Attr(),_this.NewAttr("style","z-index: 2000;"))]))]));
    }
   },
   Highlight:{
    Client:{
     clearBtn:function()
     {
      var x,el,_this,inner,f,x1;
      x=(el=Default.Button(List.ofArray([Default.Attr().Class("btn btn-large"),(_this=Default.Attr(),_this.NewAttr("style","margin-left: 10px;"))])),(inner=Default.Text("Clear"),Operators.add(el,List.ofArray([inner]))));
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
      x=(el=Default.Button(List.ofArray([Default.Attr().Class("btn btn-primary btn-large")])),(inner=Default.Text("Highlight"),Operators.add(el,List.ofArray([inner]))));
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
      return Default.Div(List.ofArray([Client7.highlightBtn(),Client7.clearBtn()]));
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Client7.main();
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
      return Client8.main();
     }
    })
   },
   InsertSnippet:{
    Client:{
     main:function()
     {
      var id,x,f,title,x1,f1,desc,x2,f2,tags,x3,f3,formlet1,x4,x5,x6,f4,f5;
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
      tags=(x3=Controls1.Input(""),(f3=function(formlet)
      {
       return Enhance.WithTextLabel("Tags",formlet);
      },f3(x3)));
      formlet1=(x4=(x5=Data.$(Data.$(Data.$(Data.$((x6=function(id1)
      {
       return function(title1)
       {
        return function(desc1)
        {
         return function(tags1)
         {
          return[id1,title1,desc1,tags1];
         };
        };
       };
      },Formlet1.Return(x6)),id),title),desc),tags),(f4=function(formlet)
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
        var x9,id1,title1,desc1,tags1,f7;
        JavaScript.Log(x7);
        x9=(id1=x7[0],(title1=x7[1],(desc1=x7[2],(tags1=x7[3],Remoting.Async("Website:3",[id1,title1,desc1,tags1])))));
        f7=function(_arg1)
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
      return Client9.main();
     }
    })
   },
   Login:{
    Client:{
     loginForm:function(redirectUrl)
     {
      var userInput,_this,_this1,_this2,submitBtn,x,_this3,f,x1,x4,x5,_this4,x6,_this5,x7,_this6,_this7,x8,_this8;
      userInput=Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","text")),(_this1=HTML5.Attr(),_this1.NewAttr("autofocus","autofocus")),(_this2=HTML5.Attr(),_this2.NewAttr("placeholder","username"))]));
      submitBtn=(x=Operators.add(Default.Button(List.ofArray([(_this3=Default.Attr(),_this3.NewAttr("type","button")),Default.Attr().Class("btn"),Default.Id("login-btn")])),List.ofArray([Default.Text("Submit")])),(f=(x1=function()
      {
       return function()
       {
        var x2,f1,f3;
        x2=(f1=function()
        {
         var x3,f2;
         x3=Remoting.Async("Website:2",[{
          Name:userInput.get_Value(),
          Password:Clienta.passInput().get_Value()
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
      return Default.Form(List.ofArray([(x4=List.ofArray([(x5=List.ofArray([Default.Text("Login")]),(_this4=Default.Tags(),_this4.NewTag("legend",x5))),(x6=List.ofArray([Default.Text("Username")]),(_this5=Default.Tags(),_this5.NewTag("label",x6))),userInput,(x7=List.ofArray([Default.Text("Password")]),(_this6=Default.Tags(),_this6.NewTag("label",x7))),Clienta.passInput()]),(_this7=Default.Tags(),_this7.NewTag("fieldset",x4))),(x8=List.ofArray([submitBtn]),(_this8=Default.Tags(),_this8.NewTag("fieldset",x8)))]));
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
      return Clienta.loginForm(this.redirectUrl);
     }
    })
   },
   Search:{
    Client:{
     main:function()
     {
      var datalist,_this,x,_this1,inp,x1,_this2,_this3,_this4,_this5,_this6,f,x2,x3,_this7,_this8,f1,x4;
      datalist=(_this=HTML5.Tags(),(x=List.ofArray([(_this1=Default.Attr(),_this1.NewAttr("id","suggestions"))]),_this.NewTag("datalist",x)));
      inp=(x1=Default.Input(List.ofArray([(_this2=HTML5.Attr(),_this2.NewAttr("list","suggestions")),(_this3=Default.Attr(),_this3.NewAttr("id","query")),(_this4=Default.Attr(),_this4.NewAttr("type","text")),Default.Attr().Class("input-xxlarge search-query"),(_this5=HTML5.Attr(),_this5.NewAttr("autofocus","autofocus")),(_this6=Default.Attr(),_this6.NewAttr("style","font-size: 30px; height: 40px"))])),(f=(x2=function(elt)
      {
       return function()
       {
        var v;
        v=elt.get_Value();
        if(v==="")
         {
          return null;
         }
        else
         {
          return Clientb.suggest(elt.get_Value(),datalist);
         }
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnKeyUp(x2,arg10);
      }),(f(x1),x1)));
      return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("form-search")])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("input-append")])),List.ofArray([inp,(x3=Default.Button(List.ofArray([Default.Text("Search"),(_this7=Default.Attr(),_this7.NewAttr("type","button")),Default.Attr().Class("btn btn-success"),(_this8=Default.Attr(),_this8.NewAttr("style","height: 50px; font-size: 20px;"))])),(f1=(x4=function()
      {
       return function()
       {
        var q,x5,_this9,f2;
        q=(x5=(_this9=inp.get_Value(),Strings.Trim(_this9)),(f2=function(uri)
        {
         return encodeURIComponent(uri);
        },f2(x5)));
        window.location.href="/search/"+q+"/1";
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnClick(x4,arg10);
      }),(f1(x3),x3)))])),datalist]));
     },
     suggest:function(query,elt)
     {
      var x,f1;
      elt.set_Html("");
      x=jQuery.getJSON("http://vuzupy.api.indexden.com/v1/indexes/WSSnippets/autocomplete?field=description&query="+query+"&callback=?",Runtime.Tupled(function(tupledArg)
      {
       var data,_arg1,x1,f,action;
       data=tupledArg[0];
       _arg1=tupledArg[1];
       x1=data.suggestions;
       f=(action=function(suggestion)
       {
        return jQuery("<option/>").text(suggestion).appendTo(elt.Body);
       },function(array)
       {
        return Arrays.iter(action,array);
       });
       return f(x1);
      }));
      f1=function(value)
      {
       value;
      };
      return f1(x);
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Clientb.main();
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
  Snippet2=Runtime.Safe(Controls.Snippet2);
  Client1=Runtime.Safe(Snippet2.Client);
  Seq=Runtime.Safe(WebSharper.Seq);
  window=Runtime.Safe(Global.window);
  Operators=Runtime.Safe(Html.Operators);
  Snippet3=Runtime.Safe(Controls.Snippet3);
  Client2=Runtime.Safe(Snippet3.Client);
  jQuery=Runtime.Safe(Global.jQuery);
  Remoting=Runtime.Safe(WebSharper.Remoting);
  Snippet4=Runtime.Safe(Controls.Snippet4);
  Client3=Runtime.Safe(Snippet4.Client);
  Concurrency=Runtime.Safe(WebSharper.Concurrency);
  alert=Runtime.Safe(Global.alert);
  JavaScript=Runtime.Safe(WebSharper.JavaScript);
  EventsPervasives=Runtime.Safe(Html.EventsPervasives);
  Snippet5=Runtime.Safe(Controls.Snippet5);
  Client4=Runtime.Safe(Snippet5.Client);
  String=Runtime.Safe(Global.String);
  Snippet6=Runtime.Safe(Controls.Snippet6);
  Client5=Runtime.Safe(Snippet6.Client);
  document=Runtime.Safe(Global.document);
  Snippet7=Runtime.Safe(Controls.Snippet7);
  Client6=Runtime.Safe(Snippet7.Client);
  Forkme=Runtime.Safe(Website.Forkme);
  Highlight=Runtime.Safe(Website.Highlight);
  Client7=Runtime.Safe(Highlight.Client);
  Formlet=Runtime.Safe(WebSharper.Formlet);
  Controls1=Runtime.Safe(Formlet.Controls);
  Enhance=Runtime.Safe(Formlet.Enhance);
  Data=Runtime.Safe(Formlet.Data);
  Formlet1=Runtime.Safe(Formlet.Formlet);
  Index=Runtime.Safe(Website.Index);
  Client8=Runtime.Safe(Index.Client);
  InsertSnippet=Runtime.Safe(Website.InsertSnippet);
  Client9=Runtime.Safe(InsertSnippet.Client);
  Login=Runtime.Safe(Website.Login);
  Clienta=Runtime.Safe(Login.Client);
  Search=Runtime.Safe(Website.Search);
  Clientb=Runtime.Safe(Search.Client);
  Strings=Runtime.Safe(WebSharper.Strings);
  encodeURIComponent=Runtime.Safe(Global.encodeURIComponent);
  return Arrays=Runtime.Safe(WebSharper.Arrays);
 });
 Runtime.OnLoad(function()
 {
  Clienta.passInput();
 });
}());
