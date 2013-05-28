(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,Website,Controls,Snippet1,WebSharper,Html,Default,List,alert,EventsPervasives,Snippet2,HTML5,Snippet3,JavaScript,Operators,Forkme,jQuery,Remoting,Concurrency,Highlight,Client,Formlet,Controls1,Enhance,Data,Formlet1,InsertSnippet,Client1,Login,Client2,window;
 Runtime.Define(Global,{
  Website:{
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
     return Operators.add(Default.A(List.ofArray([Default.HRef("https://github.com/TahaHachana/WebSharperMVC")])),List.ofArray([Default.Img(List.ofArray([Default.Src("https://s3.amazonaws.com/github/ribbons/forkme_left_green_007200.png"),Default.Alt("Fork me on GitHub"),Default.Id("forkme")]))]));
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
         JavaScript.Log(_arg1);
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
      return Client1.main();
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
          Password:Client2.passInput().get_Value()
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
      return Default.Form(List.ofArray([(x4=List.ofArray([(x5=List.ofArray([Default.Text("Login")]),(_this4=Default.Tags(),_this4.NewTag("legend",x5))),(x6=List.ofArray([Default.Text("Username")]),(_this5=Default.Tags(),_this5.NewTag("label",x6))),userInput,(x7=List.ofArray([Default.Text("Password")]),(_this6=Default.Tags(),_this6.NewTag("label",x7))),Client2.passInput()]),(_this7=Default.Tags(),_this7.NewTag("fieldset",x4))),(x8=List.ofArray([submitBtn]),(_this8=Default.Tags(),_this8.NewTag("fieldset",x8)))]));
     },
     passInput:Runtime.Field(function()
     {
      var x,_this,_this1,f,x1;
      x=Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","text")),(_this1=HTML5.Attr(),_this1.NewAttr("placeholder","password"))]));
      f=(x1=function()
      {
       return function(key)
       {
        var matchValue;
        matchValue=key.KeyCode;
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
      return Client2.loginForm(this.redirectUrl);
     }
    })
   }
  }
 });
 Runtime.OnInit(function()
 {
  Website=Runtime.Safe(Global.Website);
  Controls=Runtime.Safe(Website.Controls);
  Snippet1=Runtime.Safe(Controls.Snippet1);
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Html=Runtime.Safe(WebSharper.Html);
  Default=Runtime.Safe(Html.Default);
  List=Runtime.Safe(WebSharper.List);
  alert=Runtime.Safe(Global.alert);
  EventsPervasives=Runtime.Safe(Html.EventsPervasives);
  Snippet2=Runtime.Safe(Controls.Snippet2);
  HTML5=Runtime.Safe(Default.HTML5);
  Snippet3=Runtime.Safe(Controls.Snippet3);
  JavaScript=Runtime.Safe(WebSharper.JavaScript);
  Operators=Runtime.Safe(Html.Operators);
  Forkme=Runtime.Safe(Website.Forkme);
  jQuery=Runtime.Safe(Global.jQuery);
  Remoting=Runtime.Safe(WebSharper.Remoting);
  Concurrency=Runtime.Safe(WebSharper.Concurrency);
  Highlight=Runtime.Safe(Website.Highlight);
  Client=Runtime.Safe(Highlight.Client);
  Formlet=Runtime.Safe(WebSharper.Formlet);
  Controls1=Runtime.Safe(Formlet.Controls);
  Enhance=Runtime.Safe(Formlet.Enhance);
  Data=Runtime.Safe(Formlet.Data);
  Formlet1=Runtime.Safe(Formlet.Formlet);
  InsertSnippet=Runtime.Safe(Website.InsertSnippet);
  Client1=Runtime.Safe(InsertSnippet.Client);
  Login=Runtime.Safe(Website.Login);
  Client2=Runtime.Safe(Login.Client);
  return window=Runtime.Safe(Global.window);
 });
 Runtime.OnLoad(function()
 {
  Client2.passInput();
 });
}());
