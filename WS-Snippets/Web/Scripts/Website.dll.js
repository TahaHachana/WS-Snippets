(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,Website,AddThis,WebSharper,Html,Default,HTML5,List,T,Controls,Snippet1,alert,EventsPervasives,Snippet10,Snippet2,Snippet3,JavaScript,Operators,Snippet4,JQueryUI,Button,Snippet5,Ext,Snippet6,jQuery,Seq,Snippet7,DialogConfiguration,Dialog,Snippet8,Snippet9,AutocompleteConfiguration,Autocomplete,Forkme,Remoting,Concurrency,Highlight,Client,Formlet,Controls1,Enhance,Data,Formlet1,Index,Client1,InsertSnippet,Client2,Login,Client3,window,Search,Client4,Strings,encodeURIComponent,Arrays;
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
     Control:Runtime.Class({
      get_Body:function()
      {
       return Snippet1.main();
      }
     }),
     main:function()
     {
      var x,f,x1;
      x=Default.Button(List.ofArray([Default.Text("Press Me"),Default.Attr().Class("btn btn-primary btn-large")]));
      f=(x1=function()
      {
       return function()
       {
        return alert("Hello, world!");
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnClick(x1,arg10);
      });
      f(x);
      return x;
     }
    },
    Snippet10:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return Snippet10.main();
      }
     }),
     main:function()
     {
      var elt,_this,x,_this1,canvas,ctx;
      elt=(_this=HTML5.Tags(),(x=List.ofArray([Default.Text("Fallback content goes here."),(_this1=Default.Attr(),_this1.NewAttr("style","border: 1px solid;"))]),_this.NewTag("canvas",x)));
      canvas=elt.Body;
      canvas.height=200;
      canvas.width=400;
      ctx=canvas.getContext("2d");
      ctx.fillStyle="blue";
      ctx.fillRect(50,50,300,100);
      return elt;
     }
    },
    Snippet2:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return Snippet2.main();
      }
     }),
     main:function()
     {
      var elt,_this,x,_this1,canvas,ctx;
      elt=(_this=HTML5.Tags(),(x=List.ofArray([Default.Text("Fallback content goes here."),(_this1=Default.Attr(),_this1.NewAttr("style","border: 1px solid"))]),_this.NewTag("canvas",x)));
      canvas=elt.Body;
      canvas.height=100;
      canvas.width=400;
      ctx=canvas.getContext("2d");
      ctx.font="40px sans-serif";
      ctx.fillText("Hello Canvas",90,50);
      return elt;
     }
    },
    Snippet3:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return Snippet3.main();
      }
     }),
     main:function()
     {
      var x,f,f1;
      x=Default.Div(List.ofArray([Default.Text("Hello")]));
      f=(f1=function(elt)
      {
       return JavaScript.Log(elt.get_Text());
      },function(w)
      {
       return Operators.OnAfterRender(f1,w);
      });
      f(x);
      return x;
     }
    },
    Snippet4:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return Snippet4.main();
      }
     }),
     main:function()
     {
      return Button.New4("Button");
     }
    },
    Snippet5:{
     Control:Runtime.Class({
      get_Body:function()
      {
       var _this,_this1;
       return Default.Div(List.ofArray([Default.IFrame(List.ofArray([(_this=Default.Attr(),_this.NewAttr("src","/extjs/1")),(_this1=Default.Attr(),_this1.NewAttr("style","margin: 0; padding: 0; border: none; width: 100%; height: 440px;"))]))]));
      }
     }),
     ExtControl:Runtime.Class({
      get_Body:function()
      {
       return Snippet5.main();
      }
     }),
     main:function()
     {
      var x,f,f1;
      x=Default.Div(Runtime.New(T,{
       $:0
      }));
      f=(f1=function()
      {
       return Ext.onReady(function()
       {
        return Snippet5.viewport();
       });
      },function(w)
      {
       return Operators.OnAfterRender(f1,w);
      });
      f(x);
      return x;
     },
     viewport:function()
     {
      var config,_config_,x,f;
      config={};
      _config_={};
      config.title="Ext JS Panel";
      config.html="Hello, world!";
      _config_.layout="fit";
      _config_.items=[config];
      x=new Ext.container.Viewport(_config_);
      f=function(value)
      {
       value;
      };
      return f(x);
     }
    },
    Snippet6:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return Snippet6.canvas();
      }
     }),
     canvas:function()
     {
      var elt,_this,x,_this1,canvas,ctx,f,f1;
      elt=(_this=HTML5.Tags(),(x=List.ofArray([(_this1=Default.Attr(),_this1.NewAttr("style","display: none;"))]),_this.NewTag("canvas",x)));
      canvas=elt.Body;
      canvas.height=400;
      canvas.width=600;
      ctx=canvas.getContext("2d");
      ctx.font="60px 'Gill Sans Ultra Bold'";
      ctx.fillText("HTML",40,60);
      ctx.translate(0,70);
      Snippet6.drawShape(ctx,"#E34C26",44,255,List.ofArray([[22,5],[267,5],[244,255],[144,283]]));
      Snippet6.drawShape(ctx,"#F06529",144,262,List.ofArray([[225,239],[244,25],[144,25]]));
      Snippet6.drawShape(ctx,"#EBEBEB",144,118,List.ofArray([[103,118],[101,87],[144,87],[144,56],[67,56],[75,149],[144,149]]));
      Snippet6.drawShape(ctx,"#EBEBEB",144,198,List.ofArray([[110,189],[108,164],[77,164],[81,212],[144,230]]));
      Snippet6.drawShape(ctx,"#FFFFFF",144,118,List.ofArray([[144,149],[182,149],[178,189],[144,198],[144,230],[207,212],[215,118]]));
      Snippet6.drawShape(ctx,"#FFFFFF",144,56,List.ofArray([[144,87],[218,87],[221,56]]));
      f=(f1=function(x1)
      {
       return jQuery(x1.Body).fadeIn(1000);
      },function(w)
      {
       return Operators.OnAfterRender(f1,w);
      });
      f(elt);
      return elt;
     },
     drawLine:function(ctx,x,y)
     {
      return ctx.lineTo(x,y);
     },
     drawPaths:function(ctx,coords)
     {
      var f,action;
      f=(action=Runtime.Tupled(function(tupledArg)
      {
       var x,y;
       x=tupledArg[0];
       y=tupledArg[1];
       return Snippet6.drawLine(ctx,x,y);
      }),function(list)
      {
       return Seq.iter(action,list);
      });
      f(coords);
      ctx.closePath();
      return ctx.fill();
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
         var arg00,arg01;
         arg00=tupledArg[0];
         arg01=tupledArg[1];
         return _.moveTo(arg00,arg01);
        }))(moveTo);
        return Snippet6.drawPaths(_,coords);
       };
      }))([_2,_3]))(_4);
     }
    },
    Snippet7:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return Snippet7.main();
      }
     }),
     main:function()
     {
      var config,dialog,btn;
      config=DialogConfiguration.New();
      config.autoOpen=false;
      config.modal=true;
      config.title="Modal Dialog";
      dialog=Dialog.New1(Default.P(List.ofArray([Default.Text("This is a jQuery UI modal dialog.")])),config);
      btn=Button.New4("Press Me");
      dialog.OnClose(function()
      {
       return btn.Enable();
      });
      btn.OnClick(function()
      {
       btn.Disable();
       return jQuery(dialog.element.Body).dialog("open");
      });
      return Default.Div(List.ofArray([btn,dialog]));
     }
    },
    Snippet8:{
     Control:Runtime.Class({
      get_Body:function()
      {
       var _this,_this1;
       return Default.Div(List.ofArray([Default.IFrame(List.ofArray([(_this=Default.Attr(),_this.NewAttr("src","/extjs/2")),(_this1=Default.Attr(),_this1.NewAttr("style","margin: 0; padding: 0; border: none; width: 100%; height: 440px;"))]))]));
      }
     }),
     ExtControl:Runtime.Class({
      get_Body:function()
      {
       return Snippet8.main();
      }
     }),
     main:function()
     {
      var x,f,x1;
      return Default.Div(List.ofArray([(x=Default.Button(List.ofArray([Default.Text("Open Ext JS Window"),Default.Attr().Class("btn btn-primary")])),(f=(x1=function()
      {
       return function()
       {
        return Ext.onReady(function()
        {
         return Snippet8.window();
        });
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnClick(x1,arg10);
      }),(f(x),x)))]));
     },
     window:function()
     {
      var config,x,f;
      config={};
      config.title="Ext JS Window";
      config.width=400;
      config.height=300;
      config.maximizable=true;
      x=new Ext.window.Window(config);
      f=function(x1)
      {
       return x1.show();
      };
      return f(x);
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
      var config,returnVal,input,_this,_this1,x,f,el,x1,_this2,_this3,inner;
      config=(returnVal=[AutocompleteConfiguration.New()],(null,returnVal[0].source=Snippet9.states(),returnVal[0]));
      input=Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("id","state-input")),(_this1=HTML5.Attr(),_this1.NewAttr("autofocus","true"))]));
      x=Autocomplete.New1(input,config);
      f=function(value)
      {
       value;
      };
      f(x);
      return Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-widget")])),List.ofArray([(el=(x1=List.ofArray([(_this2=Default.Attr(),_this2.NewAttr("for","state-input"))]),(_this3=Default.Tags(),_this3.NewTag("label",x1))),(inner=Default.Text("State: "),Operators.add(el,List.ofArray([inner])))),input]));
     },
     states:Runtime.Field(function()
     {
      return["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Marianas Islands","Ohio","Oklahoma","Oregon","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Virgin Islands","Washington","West Virginia","Wisconsin","Wyoming"];
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
     return Operators.add(Default.A(List.ofArray([Default.HRef("https://github.com/TahaHachana/WS-Snippets")])),List.ofArray([Default.Img(List.ofArray([Default.Src("https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"),Default.Alt("Fork me on GitHub"),Default.Id("forkme"),(_this=Default.Attr(),_this.NewAttr("style","z-index: 2000;"))]))]));
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
         x4=Remoting.Async("Website:0",[code]);
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
      return Default.Div(List.ofArray([Client.highlightBtn(),Client.clearBtn()]));
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Client.main();
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
        x9=(id1=x7[0],(title1=x7[1],(desc1=x7[2],(code1=x7[3],Remoting.Async("Website:3",[id1,title1,desc1,code1])))));
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
      return Client1.main();
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
        x9=(id1=x7[0],(title1=x7[1],(desc1=x7[2],(tags1=x7[3],Remoting.Async("Website:2",[id1,title1,desc1,tags1])))));
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
      return Client2.main();
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
         x3=Remoting.Async("Website:1",[{
          Name:userInput.get_Value(),
          Password:Client3.passInput().get_Value()
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
      return Default.Form(List.ofArray([(x4=List.ofArray([(x5=List.ofArray([Default.Text("Login")]),(_this4=Default.Tags(),_this4.NewTag("legend",x5))),(x6=List.ofArray([Default.Text("Username")]),(_this5=Default.Tags(),_this5.NewTag("label",x6))),userInput,(x7=List.ofArray([Default.Text("Password")]),(_this6=Default.Tags(),_this6.NewTag("label",x7))),Client3.passInput()]),(_this7=Default.Tags(),_this7.NewTag("fieldset",x4))),(x8=List.ofArray([submitBtn]),(_this8=Default.Tags(),_this8.NewTag("fieldset",x8)))]));
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
      return Client3.loginForm(this.redirectUrl);
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
          return Client4.suggest(elt.get_Value(),datalist);
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
      x=jQuery.getJSON("http://vuzupy.api.indexden.com/v1/indexes/WSSnippets/autocomplete?field=title&query="+query+"&callback=?",Runtime.Tupled(function(tupledArg)
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
      return Client4.main();
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
  alert=Runtime.Safe(Global.alert);
  EventsPervasives=Runtime.Safe(Html.EventsPervasives);
  Snippet10=Runtime.Safe(Controls.Snippet10);
  Snippet2=Runtime.Safe(Controls.Snippet2);
  Snippet3=Runtime.Safe(Controls.Snippet3);
  JavaScript=Runtime.Safe(WebSharper.JavaScript);
  Operators=Runtime.Safe(Html.Operators);
  Snippet4=Runtime.Safe(Controls.Snippet4);
  JQueryUI=Runtime.Safe(WebSharper.JQueryUI);
  Button=Runtime.Safe(JQueryUI.Button);
  Snippet5=Runtime.Safe(Controls.Snippet5);
  Ext=Runtime.Safe(Global.Ext);
  Snippet6=Runtime.Safe(Controls.Snippet6);
  jQuery=Runtime.Safe(Global.jQuery);
  Seq=Runtime.Safe(WebSharper.Seq);
  Snippet7=Runtime.Safe(Controls.Snippet7);
  DialogConfiguration=Runtime.Safe(JQueryUI.DialogConfiguration);
  Dialog=Runtime.Safe(JQueryUI.Dialog);
  Snippet8=Runtime.Safe(Controls.Snippet8);
  Snippet9=Runtime.Safe(Controls.Snippet9);
  AutocompleteConfiguration=Runtime.Safe(JQueryUI.AutocompleteConfiguration);
  Autocomplete=Runtime.Safe(JQueryUI.Autocomplete);
  Forkme=Runtime.Safe(Website.Forkme);
  Remoting=Runtime.Safe(WebSharper.Remoting);
  Concurrency=Runtime.Safe(WebSharper.Concurrency);
  Highlight=Runtime.Safe(Website.Highlight);
  Client=Runtime.Safe(Highlight.Client);
  Formlet=Runtime.Safe(WebSharper.Formlet);
  Controls1=Runtime.Safe(Formlet.Controls);
  Enhance=Runtime.Safe(Formlet.Enhance);
  Data=Runtime.Safe(Formlet.Data);
  Formlet1=Runtime.Safe(Formlet.Formlet);
  Index=Runtime.Safe(Website.Index);
  Client1=Runtime.Safe(Index.Client);
  InsertSnippet=Runtime.Safe(Website.InsertSnippet);
  Client2=Runtime.Safe(InsertSnippet.Client);
  Login=Runtime.Safe(Website.Login);
  Client3=Runtime.Safe(Login.Client);
  window=Runtime.Safe(Global.window);
  Search=Runtime.Safe(Website.Search);
  Client4=Runtime.Safe(Search.Client);
  Strings=Runtime.Safe(WebSharper.Strings);
  encodeURIComponent=Runtime.Safe(Global.encodeURIComponent);
  return Arrays=Runtime.Safe(WebSharper.Arrays);
 });
 Runtime.OnLoad(function()
 {
  Client3.passInput();
  Snippet9.states();
 });
}());
