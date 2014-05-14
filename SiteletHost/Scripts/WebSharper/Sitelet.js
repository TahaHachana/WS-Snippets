(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,WebSharper,Html,Default,List,Arrays,Seq,Operators,Website,Controls,Snippet10,Client,HTML5,T,EventsPervasives,Operators1,Snippet11,Client1,document,Snippet12,Client2,Snippet13,Client3,Snippet14,Client4,jQuery,Concurrency,Remoting,Snippet15,Client5,google,visualization,DataTable,Snippet16,Client6,LineChart,Date,Number,Snippet17,Client7,Snippet18,JS,JQueryUI,Tabs,Snippet19,window,Snippet2,Client8,Snippet20,Snippet21,JS1,Snippet22,JS2,String,Datepicker,Snippet25,Client9,Snippet28,Clienta,PieChart,Snippet29,Snippet3,Clientb,Snippet31,Snippet32,JS3,clearTimeout,setTimeout,alert,Snippet4,Clientc,JavaScript,Snippet5,Clientd,Snippet6,Cliente,Snippet7,Clientf,WebSocket,Snippet8,Client10,Snippet9,Client11,Forkme,Highlight,Client12,Formlet,Controls1,Enhance,Data,Formlet1,Index,Client13,InsertSnippet,Client14,Login,Client15,Piglets,Piglet1,Search,Client16,Validation,Pervasives,Controls2;
 Runtime.Define(Global,{
  Website:{
   Controls:{
    Snippet1:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return Default.H2(List.ofArray([Default.Text("Hello World!")]));
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
       return n<2?1:n*Client.factRec(n-1);
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
         recSpan.set_Text("Recursion: "+Global.String(Client.factRec(v)));
         return foldSpan.set_Text("Array.fold: "+Global.String(Client.factFold(v)));
        };
       };
       EventsPervasives.Events().OnClick(arg00,x);
       button=x;
       return Default.Div(List.ofArray([Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("form-inline")])),List.ofArray([input,button])),Operators1.add(Default.Div(List.ofArray([Default.Attr().NewAttr("style","margin-top: 8px;")])),List.ofArray([recSpan,Default.Br(Runtime.New(T,{
        $:0
       })),foldSpan]))]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client.main();
      }
     })
    },
    Snippet11:{
     Client:{
      main:function()
      {
       return Operators1.add(Operators1.add(Default.Table(List.ofArray([Default.Attr().Class("table table-bordered table-striped"),Default.Attr().NewAttr("style","width: 900px;")])),List.ofArray([Operators1.add(Default.TR(Runtime.New(T,{
        $:0
       })),List.map(function(txt)
       {
        return Client1.th(txt);
       },List.ofArray(["Level","Core","CSS","Events","HTML","Selectors-API"])))])),List.map(function(level)
       {
        return Client1.tr(level);
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
       return Operators1.add(Default.TR(List.ofArray([Client1.th(level)])),tds);
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client1.main();
      }
     })
    },
    Snippet12:{
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
        return Client2.btn(Global.String(n1),function()
        {
         num.contents=10*num.contents+n1;
         return updateDisplay(null);
        });
       };
       return Default.Div(List.ofArray([display,Default.Br(Runtime.New(T,{
        $:0
       })),Default.Div(List.ofArray([digit(7),digit(8),digit(9),Client2.btn("/",o(function(x)
       {
        return function(y)
        {
         return x/y>>0;
        };
       })),Default.Br(Runtime.New(T,{
        $:0
       })),digit(4),digit(5),digit(6),Client2.btn("*",o(function(x)
       {
        return function(y)
        {
         return x*y;
        };
       })),Default.Br(Runtime.New(T,{
        $:0
       })),digit(1),digit(2),digit(3),Client2.btn("-",o(function(x)
       {
        return function(y)
        {
         return x-y;
        };
       })),Default.Br(Runtime.New(T,{
        $:0
       })),digit(0),Client2.btn("C",c),Client2.btn("AC",ac),Client2.btn("+",o(function(x)
       {
        return function(y)
        {
         return x+y;
        };
       })),Default.Br(Runtime.New(T,{
        $:0
       })),Client2.btn("+/-",n),Client2.btn("=",e)]))]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client2.main();
      }
     })
    },
    Snippet13:{
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
       return Client3.main();
      }
     })
    },
    Snippet14:{
     Client:{
      accordionGroup:function(num)
      {
       var accordionBody,jq,x,arg00;
       accordionBody=Operators1.add(Default.Div(List.ofArray([Default.Attr().NewAttr("style","display: none;")])),List.ofArray([Default.Div(List.ofArray([Default.Text(Client4.loremIpsum())]))]));
       jq=jQuery(accordionBody.Body);
       x=Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("btn-link"),Default.Attr().NewAttr("style","font-weight: bold;")])),List.ofArray([Default.Text("Collapsible Group "+Global.String(num))]));
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
       return Operators1.add(Default.Div(List.ofArray([Default.Attr().NewAttr("style",Client4.style())])),List.ofArray([Default.Div(List.ofArray([x])),accordionBody]));
      },
      loremIpsum:Runtime.Field(function()
      {
       return"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit lacus, commodo non posuere sit amet, sodales in risus. Donec et sagittis nisl, at blandit nisl. Cras fermentum libero et erat tincidunt, vel euismod justo elementum. Quisque eget augue quis arcu dictum sagittis. Duis in arcu vulputate lorem sagittis facilisis. In non justo quis metus aliquet luctus a id justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce vitae augue sagittis, sodales diam id, blandit turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor suscipit nibh vel mollis. Vestibulum eros lorem, pharetra quis varius in, lobortis at risus.";
      }),
      main:function()
      {
       return Operators1.add(Default.Div(Runtime.New(T,{
        $:0
       })),List.map(function(num)
       {
        return Client4.accordionGroup(num);
       },Seq.toList(Operators.range(1,3))));
      },
      style:Runtime.Field(function()
      {
       return"border: 1px solid; border-radius: 5px; margin-bottom: 10px; padding: 3px; width: 900px;";
      })
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client4.main();
      }
     })
    },
    Snippet15:{
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
          return Concurrency.Bind(Remoting.Async("Sitelet:1",[input.get_Value()]),function(arg101)
          {
           output.set_Text(arg101);
           return Concurrency.Return(null);
          });
         }));
        };
       };
       EventsPervasives.Events().OnClick(arg00,x);
       return Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("form-inline")])),List.ofArray([input,x,output]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client5.main();
      }
     })
    },
    Snippet16:{
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
       Client6.setCell(dataTable,0,0,"2004");
       Client6.setCell(dataTable,1,0,"2005");
       Client6.setCell(dataTable,2,0,"2006");
       Client6.setCell(dataTable,3,0,"2007");
       Client6.setCell(dataTable,0,1,1000);
       Client6.setCell(dataTable,1,1,1170);
       Client6.setCell(dataTable,2,1,660);
       Client6.setCell(dataTable,3,1,1030);
       Client6.setCell(dataTable,0,2,400);
       Client6.setCell(dataTable,1,2,460);
       Client6.setCell(dataTable,2,2,1120);
       Client6.setCell(dataTable,3,2,540);
       data=dataTable;
       x=Default.Div(List.ofArray([Default.Attr().NewAttr("style","width: 900px; height: 500px;")]));
       Operators1.OnAfterRender(function(elt)
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
       return Client6.main();
      }
     })
    },
    Snippet17:{
     Client:{
      draw:function(ctx)
      {
       var now,i,i1,sec,min,hr,hr1;
       now=new Date();
       ctx.save();
       ctx.clearRect(0,0,150,150);
       ctx.translate(75,75);
       ctx.scale(0.4,0.4);
       ctx.rotate(-3.14159265358979/2);
       ctx.strokeStyle="black";
       ctx.fillStyle="white";
       ctx.lineWidth=8;
       ctx.save();
       for(i=1;i<=12;i++){
        ctx.beginPath();
        ctx.rotate(3.14159265358979/6);
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
        ctx.rotate(3.14159265358979/30);
       }
       ctx.restore();
       sec=now.getSeconds();
       min=now.getMinutes();
       hr=Number(now.getHours());
       hr1=hr>=12?hr-12:hr;
       ctx.fillStyle="black";
       ctx.save();
       ctx.rotate(3.14159265358979*(Number(hr1)/6+Number(min)/360+Number(sec)/21600));
       ctx.lineWidth=14;
       ctx.beginPath();
       ctx.moveTo(-20,0);
       ctx.lineTo(80,0);
       ctx.stroke();
       ctx.restore();
       ctx.save();
       ctx.rotate(3.14159265358979*(Number(min)/30+Number(sec)/1800));
       ctx.lineWidth=10;
       ctx.beginPath();
       ctx.moveTo(-28,0);
       ctx.lineTo(112,0);
       ctx.stroke();
       ctx.restore();
       ctx.save();
       ctx.rotate(Number(sec)*3.14159265358979/30);
       ctx.strokeStyle="#D40000";
       ctx.fillStyle="#D40000";
       ctx.lineWidth=6;
       ctx.beginPath();
       ctx.moveTo(-30,0);
       ctx.lineTo(83,0);
       ctx.stroke();
       ctx.beginPath();
       ctx.arc(0,0,10,0,3.14159265358979*2,true);
       ctx.fill();
       ctx.beginPath();
       ctx.arc(95,0,10,0,3.14159265358979*2,true);
       ctx.stroke();
       ctx.fillStyle="#555";
       ctx.arc(0,0,3,0,3.14159265358979*2,true);
       ctx.fill();
       ctx.restore();
       ctx.beginPath();
       ctx.lineWidth=14;
       ctx.strokeStyle="#325FA2";
       ctx.arc(0,0,142,0,3.14159265358979*2,true);
       ctx.stroke();
       return ctx.restore();
      },
      loop:function(ctx)
      {
       return Concurrency.Delay(function()
       {
        return Concurrency.Bind(Concurrency.Sleep(1000),function()
        {
         Client7.draw(ctx);
         return Concurrency.Bind(Client7.loop(ctx),function()
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
       Client7.draw(ctx);
       Concurrency.Start(Client7.loop(ctx));
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
    Snippet18:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return JS.main();
      }
     }),
     JS:{
      addTabBtn:function(tabs)
      {
       var x,arg00;
       x=Operators1.add(Default.Button(List.ofArray([Default.Attr().Class("btn btn-success"),Default.Attr().NewAttr("style","margin-right: 8px;")])),List.ofArray([Default.Text("Add")]));
       arg00=function()
       {
        return function()
        {
         var patternInput;
         patternInput=JS.tab(tabs.get_Length()+1);
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
        return JS.tab(x);
       },Seq.toList(Operators.range(1,3))));
       return Default.Div(List.ofArray([tabs,Operators1.add(Default.Div(List.ofArray([Default.Attr().NewAttr("style","margin-top: 8px;")])),List.ofArray([JS.addTabBtn(tabs),JS.removeTabBtn(tabs)]))]));
      },
      removeTabBtn:function(tabs)
      {
       var x,arg00;
       x=Operators1.add(Default.Button(List.ofArray([Default.Attr().Class("btn btn-danger")])),List.ofArray([Default.Text("Remove")]));
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
    Snippet19:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return Snippet19.main();
      }
     }),
     main:function()
     {
      var x,arg00;
      x=Operators1.add(Default.Button(List.ofArray([Default.Attr().Class("btn btn-primary btn-large")])),List.ofArray([Default.Text("Home Page")]));
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
    Snippet2:{
     Client:{
      drawLogo:function(ctx)
      {
       ctx.font="60px 'Gill Sans Ultra Bold'";
       ctx.fillText("HTML",40,60);
       ctx.translate(0,70);
       Client8.drawShape(ctx,"#E34C26",44,255,List.ofArray([[22,5],[267,5],[244,255],[144,283]]));
       Client8.drawShape(ctx,"#F06529",144,262,List.ofArray([[225,239],[244,25],[144,25]]));
       Client8.drawShape(ctx,"#EBEBEB",144,118,List.ofArray([[103,118],[101,87],[144,87],[144,56],[67,56],[75,149],[144,149]]));
       Client8.drawShape(ctx,"#EBEBEB",144,198,List.ofArray([[110,189],[108,164],[77,164],[81,212],[144,230]]));
       Client8.drawShape(ctx,"#FFFFFF",144,118,List.ofArray([[144,149],[182,149],[178,189],[144,198],[144,230],[207,212],[215,118]]));
       return Client8.drawShape(ctx,"#FFFFFF",144,56,List.ofArray([[144,87],[218,87],[221,56]]));
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
       Client8.drawLogo(canvas.getContext("2d"));
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
    Snippet20:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return Snippet20.main();
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
    },
    Snippet21:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return JS1.main();
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
       return Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("col-lg-3 cat-img-div"),Default.Attr().NewAttr("style","width: auto;")])),List.ofArray([img]));
      },
      main:function()
      {
       var patternInput,img3,img2,img1,idRef,src,target;
       patternInput=[{
        contents:""
       },JS1.img("1"),JS1.img("2"),JS1.img("3")];
       img3=patternInput[3];
       img2=patternInput[2];
       img1=patternInput[1];
       idRef=patternInput[0];
       src=Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("row"),Default.Attr().NewAttr("id","src")])),List.ofArray([JS1.imgDiv(img1),JS1.imgDiv(img2),JS1.imgDiv(img3)]));
       target=Operators1.add(Default.Div(List.ofArray([Default.Attr().NewAttr("id","target")])),List.ofArray([Operators1.add(Default.P(List.ofArray([Default.Attr().Class("text-center"),Default.Attr().NewAttr("id","target-text")])),List.ofArray([Default.Text("Drop image here")]))]));
       Seq.iter(function(elt)
       {
        return JS1.handleDragStart(idRef,elt);
       },List.ofArray([img1,img2,img3]));
       JS1.handleDragging(target,idRef);
       return Default.Div(List.ofArray([src,target]));
      }
     }
    },
    Snippet22:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return JS2.main();
      }
     }),
     JS:{
      displayPosition:function(p)
      {
       var coords;
       coords=p.coords;
       JS2.setText("longitude",coords.longitude);
       JS2.setText("latitude",coords.latitude);
       JS2.setText("altitude",coords.altitude);
       JS2.setText("accuracy",coords.accuracy);
       JS2.setText("alt-acc",coords.altitudeAccuracy);
       JS2.setText("heading",coords.heading);
       JS2.setText("speed",coords.speed);
       return JS2.setText("timestamp",p.timestamp);
      },
      main:function()
      {
       var options,x,arg00;
       options={
        enableHighAccuracy:true,
        maximumAge:60000,
        timeout:10000
       };
       x=Operators1.add(Default.Button(List.ofArray([Default.Attr().Class("btn btn-primary btn-large")])),List.ofArray([Default.Text("Track My Location")]));
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
            return JS2.displayPosition(p);
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
       return Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("table-responsive")])),List.ofArray([Operators1.add(Default.Table(List.ofArray([Default.Attr().Class("table table-bordered"),Default.Attr().NewAttr("id","geolocation-table")])),List.ofArray([JS2.tr("Longitude","longitude"),JS2.tr("Latitude","latitude"),JS2.tr("Altitude","altitude"),JS2.tr("Accuracy","accuracy"),JS2.tr("Altitude Accuracy","alt-acc"),JS2.tr("Heading","heading"),JS2.tr("Speed","speed"),JS2.tr("Time Stamp","timestamp")])),x]));
      },
      setText:function(id,property)
      {
       var propertyStr;
       propertyStr=JS2.toStr(property);
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
    Snippet23:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return Datepicker.New4();
      }
     })
    },
    Snippet24:{
     Control:Runtime.Class({
      get_Body:function()
      {
       var x,arg00;
       x=Operators1.add(Default.Button(List.ofArray([Default.Attr().Class("btn btn-primary btn-lg")])),List.ofArray([Default.Text("Click me")]));
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
    Snippet25:{
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
       Client9.lineTo(ctx,"butt",50,50,50,350);
       Client9.lineTo(ctx,"round",250,50,250,350);
       Client9.lineTo(ctx,"square",450,50,450,350);
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
    Snippet26:{
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
    Snippet28:{
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
       Operators1.OnAfterRender(function(elt)
       {
        return Clienta.pie(Clienta.data(),elt.Body);
       },x);
       return x;
      },
      pie:function(data,dom)
      {
       var dt,options;
       dt=Clienta.dataTable(data);
       options={};
       options.title="Resources Breakdown";
       return(new PieChart(dom)).draw(dt,options);
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Clienta.main();
      }
     })
    },
    Snippet29:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return Snippet29.map();
      }
     }),
     map:function()
     {
      var x;
      x=Default.Div(List.ofArray([Default.Attr().NewAttr("id","map")]));
      Operators1.OnAfterRender(function(elt)
      {
       new google.maps.Map(elt.Body,{
        center:new google.maps.LatLng(21.427378,39.814838),
        zoom:4
       });
      },x);
      return x;
     }
    },
    Snippet3:{
     Client:{
      main:function()
      {
       var location;
       location=window.location;
       return Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("table-responsive")])),List.ofArray([Operators1.add(Default.Table(List.ofArray([Default.Attr().Class("table table-striped"),Default.Attr().NewAttr("id","location-table")])),List.ofArray([Default.TR(List.ofArray([Default.TH(List.ofArray([Default.Text("Property")])),Default.TH(List.ofArray([Default.Text("Value")]))])),Clientb.tr("Hash",location.hash),Clientb.tr("Host",location.host),Clientb.tr("Hostname",location.hostname),Clientb.tr("Href",location.href),Clientb.tr("Pathname",location.pathname),Clientb.tr("Port",location.port),Clientb.tr("Protocol",location.protocol),Clientb.tr("Search",location.search)]))]));
      },
      tr:function(td,_td_)
      {
       return Default.TR(List.ofArray([Default.TD(List.ofArray([Default.Text(td)])),Default.TD(List.ofArray([Default.Text(_td_)]))]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Clientb.main();
      }
     })
    },
    Snippet31:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return Snippet31.main();
      }
     }),
     btn:function(txt)
     {
      return Operators1.add(Default.Button(List.ofArray([Default.Attr().Class("btn btn-default"),Default.Attr().NewAttr("type","button")])),List.ofArray([Default.Text(txt)]));
     },
     main:function()
     {
      var x,arg00,x1,arg001,x2,arg002;
      x=Snippet31.btn("Back");
      arg00=function()
      {
       return function()
       {
        return window.history.back();
       };
      };
      EventsPervasives.Events().OnClick(arg00,x);
      x1=Snippet31.btn("Forward");
      arg001=function()
      {
       return function()
       {
        return window.history.forward();
       };
      };
      EventsPervasives.Events().OnClick(arg001,x1);
      x2=Snippet31.btn("Go back 2 pages");
      arg002=function()
      {
       return function()
       {
        return window.history.go(-2);
       };
      };
      EventsPervasives.Events().OnClick(arg002,x2);
      return Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("btn-group btn-group-lg")])),List.ofArray([x,x1,x2]));
     }
    },
    Snippet32:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return JS3.main();
      }
     }),
     JS:{
      clearBtn:function()
      {
       return Operators1.add(Default.Button(List.ofArray([Default.Attr().Class("btn btn-lg btn-warning"),Default.Attr().NewAttr("id","clear-btn"),Default.Attr().NewAttr("type","button")])),List.ofArray([Default.Text("Clear Timeout")]));
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
       x=Operators1.add(Default.Button(List.ofArray([Default.Attr().Class("btn btn-lg btn-primary"),Default.Attr().NewAttr("id","set-btn"),Default.Attr().NewAttr("type","button")])),List.ofArray([Default.Text("Set Timeout")]));
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
       return Operators1.add(btnsDiv,List.ofArray([x]));
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
    },
    Snippet4:{
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
       return Operators1.add(Default.LI(List.ofArray([Default.Attr().Class("list-group-item")])),List.ofArray([Default.Div(List.ofArray([Operators1.add(Operators1.add(Default.A(List.ofArray([Default.HRef(profileLink),Default.Attr().Class("profile-link"),Default.Attr().NewAttr("target","_blank")])),List.ofArray([Default.Img(List.ofArray([Default.Src(tweet.Avatar),Default.Alt(name),Default.Attr().Class("avatar")])),Default.Tags().NewTag("strong",arg10)])),List.ofArray([Default.Text(" @"+screenName)])),Default.Br(Runtime.New(T,{
        $:0
       })),Default.Tags().NewTag("small",arg101),p,Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("tweet-actions")])),List.ofArray([Operators1.add(Default.A(List.ofArray([Default.HRef(replyLink),Default.Attr().Class("tweet-action"),Default.Attr().NewAttr("style","margin-right: 5px;")])),List.ofArray([Default.Text("Reply")])),Operators1.add(Default.A(List.ofArray([Default.HRef(retweetLink),Default.Attr().Class("tweet-action"),Default.Attr().NewAttr("style","margin-right: 5px;")])),List.ofArray([Default.Text("Retweet")])),Operators1.add(Default.A(List.ofArray([Default.HRef(favoriteLink),Default.Attr().Class("tweet-action")])),List.ofArray([Default.Text("Favorite")]))]))]))]));
      },
      main:function()
      {
       var x;
       x=Default.Div(List.ofArray([Default.Attr().NewAttr("id","tweets")]));
       Operators1.OnAfterRender(function(elt)
       {
        return Concurrency.Start(Concurrency.Delay(function()
        {
         var x1;
         x1=Remoting.Async("Sitelet:2",[]);
         return Concurrency.Bind(x1,function(arg101)
         {
          var tweets,ul;
          if(arg101.$==1)
           {
            tweets=arg101.$0;
            ul=Default.UL(List.ofArray([Default.Attr().Class("list-group"),Default.Attr().NewAttr("id","tweets-ul")]));
            Seq.iter(function(tweet)
            {
             return ul.AppendI(Clientc.li(tweet));
            },tweets);
            elt.AppendI(ul);
            Clientc.toggleActionsVisibility();
            Clientc.handleTweetActions();
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
       return Clientc.main();
      }
     })
    },
    Snippet5:{
     Client:{
      inputElt:function()
      {
       return Default.Input(List.ofArray([Default.Attr().Class("form-control"),Default.Attr().NewAttr("type","text"),Default.Attr().NewAttr("value","Hello console!"),HTML5.Attr().NewAttr("autofocus","autofocus")]));
      },
      logBtn:function(elt)
      {
       var x,arg00;
       x=Operators1.add(Default.Button(List.ofArray([Default.Attr().Class("btn btn-primary"),Default.Attr().NewAttr("type","button")])),List.ofArray([Default.Text("Log")]));
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
       input=Clientd.inputElt(null);
       arg10=List.ofArray([Default.Text("Log messages to the console")]);
       arg101=List.ofArray([Default.Attr().Class("form-group")]);
       arg102=List.ofArray([Default.Text("Message")]);
       return Operators1.add(Default.Div(List.ofArray([Default.Attr().NewAttr("id","console-log")])),List.ofArray([Default.Tags().NewTag("legend",arg10),Operators1.add(Default.Tags().NewTag("fieldset",arg101),List.ofArray([Default.Tags().NewTag("label",arg102),input])),Clientd.logBtn(input)]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Clientd.main();
      }
     })
    },
    Snippet6:{
     Client:{
      display:function(p)
      {
       var coords,copyOfStruct,copyOfStruct1,copyOfStruct2;
       coords=p.coords;
       copyOfStruct=coords.longitude;
       Cliente.setText("longitude",String(copyOfStruct));
       copyOfStruct1=coords.latitude;
       Cliente.setText("latitude",String(copyOfStruct1));
       Cliente.setText("altitude",Cliente.toStr(coords.altitude));
       copyOfStruct2=coords.accuracy;
       Cliente.setText("accuracy",String(copyOfStruct2));
       Cliente.setText("alt-acc",Cliente.toStr(coords.altitudeAccuracy));
       Cliente.setText("heading",Cliente.toStr(coords.heading));
       Cliente.setText("speed",Cliente.toStr(coords.speed));
       return Cliente.setText("timestamp",p.timestamp.toString());
      },
      getPosition:function()
      {
       return Concurrency.Delay(function()
       {
        window.navigator.geolocation.getCurrentPosition(function(p)
        {
         return Cliente.display(p);
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
          return Concurrency.Bind(Cliente.getPosition(),function()
          {
           return Concurrency.Return(null);
          });
         }));
        };
       };
       EventsPervasives.Events().OnClick(arg00,x);
       return Default.Div(List.ofArray([Default.Tags().NewTag("style",List.ofArray([Default.Text("td {width: 200px;}")])),Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("table-responsive")])),List.ofArray([Operators1.add(Default.Table(List.ofArray([Default.Attr().Class("table table-bordered"),Default.Attr().NewAttr("id","geolocation-table")])),List.ofArray([Cliente.tr("Longitude","longitude"),Cliente.tr("Latitude","latitude"),Cliente.tr("Altitude","altitude"),Cliente.tr("Accuracy","accuracy"),Cliente.tr("Altitude Accuracy","alt-acc"),Cliente.tr("Heading","heading"),Cliente.tr("Speed","speed"),Cliente.tr("Time Stamp","timestamp")]))])),x]));
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
       return Cliente.main();
      }
     })
    },
    Snippet7:{
     Client:{
      main:function()
      {
       var elt,video;
       elt=Operators1.add(HTML5.Tags().NewTag("video",List.ofArray([Default.Attr().NewAttr("height","360px"),Default.Attr().NewAttr("width","640px")])),List.ofArray([HTML5.Tags().NewTag("source",List.ofArray([Default.Attr().NewAttr("src","/Videos/madagascar.mp4"),Default.Attr().NewAttr("type","video/mp4")]))]));
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
       return Clientf.main();
      }
     })
    },
    Snippet8:{
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
         return Client10.log("Sent: "+txt,"black");
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
       return Client10.handleEvents(ws,x1,sendBtn);
      },
      handleEvents:function(ws,disconnectBtn,sendBtn)
      {
       ws.onerror=function()
       {
        return Client10.log("Error","red");
       };
       ws.onmessage=function(msg)
       {
        return Client10.log("Received: "+String(msg.data),"blue");
       };
       ws.onopen=function()
       {
        Client10.append("send-btn",sendBtn);
        Client10.append("btns",disconnectBtn);
        return Client10.log("Connected","green");
       };
       ws.onclose=function()
       {
        document.getElementById("connect-btn").removeAttribute("disabled");
        sendBtn["HtmlProvider@32"].Remove(sendBtn.Body);
        disconnectBtn["HtmlProvider@32"].Remove(disconnectBtn.Body);
        return Client10.log("Disconnected","rgb(250, 167, 50)");
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
         return Client10.connect(msgText);
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
       return Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("row")])),List.ofArray([Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("col-lg-4"),Default.Attr().NewAttr("id","ws-col-1")])),List.ofArray([Operators1.add(Default.Div(List.ofArray([Default.Attr().NewAttr("style","margin-bottom: 10px;"),Default.Attr().NewAttr("id","btns")])),List.ofArray([x])),Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("form-group")])),List.ofArray([Default.Tags().NewTag("label",arg10),msgText])),Default.Div(List.ofArray([Default.Attr().NewAttr("id","send-btn")]))])),Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("col-lg-5"),Default.Attr().NewAttr("style","border-left: 1px solid lightgray;"),Default.Attr().NewAttr("id","ws-col-1")])),List.ofArray([Operators1.add(Default.Div(List.ofArray([Default.Attr().NewAttr("style","margin-left: 20px;")])),List.ofArray([Default.Tags().NewTag("label",arg101),logDiv,x1]))]))]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client10.main();
      }
     })
    },
    Snippet9:{
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
       return Client11.main();
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
     return Operators1.add(Default.A(List.ofArray([Default.HRef("https://github.com/TahaHachana/WS-Snippets"),Default.Attr().NewAttr("target","_blank")])),List.ofArray([Default.Img(List.ofArray([Default.Src("https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"),Default.Alt("Fork me on GitHub"),Default.Id("forkme"),Default.Attr().NewAttr("style","z-index: 2000;")]))]));
    }
   },
   Highlight:{
    Client:{
     clearBtn:function()
     {
      var x,arg00;
      x=Operators1.add(Default.Button(List.ofArray([Default.Attr().Class("btn btn-default"),Default.Attr().NewAttr("style","margin-left: 10px;")])),List.ofArray([Default.Text("Clear")]));
      arg00=function()
      {
       return function()
       {
        return jQuery("#code-textarea").val("");
       };
      };
      EventsPervasives.Events().OnClick(arg00,x);
      return x;
     },
     highlightBtn:function()
     {
      var x,arg00;
      x=Operators1.add(Default.Button(List.ofArray([Default.Attr().Class("btn btn-primary")])),List.ofArray([Default.Text("Highlight")]));
      arg00=function(elt)
      {
       return function()
       {
        return Concurrency.Start(Concurrency.Delay(function()
        {
         var loaderJq,htmlJq,previewJq,x1,code,x2;
         elt["HtmlProvider@32"].SetAttribute(elt.Body,"disabled","disabled");
         loaderJq=jQuery("#loader");
         loaderJq.css("visibility","visible");
         htmlJq=jQuery("#html-textarea");
         previewJq=jQuery("#html-preview");
         htmlJq.val("");
         previewJq.html("");
         x1=jQuery("#code-textarea").val();
         code=Global.String(x1);
         x2=Remoting.Async("Sitelet:0",[code]);
         return Concurrency.Bind(x2,function(arg101)
         {
          var a,html,b;
          loaderJq.css("visibility","hidden");
          if(arg101.$==1)
           {
            html=arg101.$0;
            htmlJq.val(html).click(function()
            {
             return htmlJq.select();
            });
            previewJq.html(html);
            a=Concurrency.Return(null);
           }
          else
           {
            alert("An error occured.");
            a=Concurrency.Return(null);
           }
          b=Concurrency.Delay(function()
          {
           elt["HtmlProvider@32"].RemoveAttribute(elt.Body,"disabled");
           return Concurrency.Return(null);
          });
          return Concurrency.Bind(a,function()
          {
           return b;
          });
         });
        }));
       };
      };
      EventsPervasives.Events().OnClick(arg00,x);
      return x;
     },
     main:function()
     {
      return Default.Div(List.ofArray([Client12.highlightBtn(),Client12.clearBtn()]));
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Client12.main();
     }
    })
   },
   Index:{
    Client:{
     main:function()
     {
      var x,id,x1,title,x2,desc,x3,code,formlet;
      x=Controls1.Input("");
      id=Enhance.WithTextLabel("Id",x);
      x1=Controls1.Input("");
      title=Enhance.WithTextLabel("Title",x1);
      x2=Controls1.TextArea("");
      desc=Enhance.WithTextLabel("Description",x2);
      x3=Controls1.TextArea("");
      code=Enhance.WithTextLabel("Code",x3);
      formlet=Enhance.WithFormContainer(Enhance.WithSubmitAndResetButtons(Data.$(Data.$(Data.$(Data.$(Formlet1.Return(function(id1)
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
      }),id),title),desc),code)));
      return Formlet1.Run(Runtime.Tupled(function(x4)
      {
       return Concurrency.Start(Concurrency.Delay(function()
       {
        return Concurrency.Bind(Remoting.Async("Sitelet:5",[x4[0],x4[1],x4[2],x4[3]]),function()
        {
         alert("Document indexed.");
         return Concurrency.Return(null);
        });
       }));
      }),formlet);
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Client13.main();
     }
    })
   },
   InsertSnippet:{
    Client:{
     main:function()
     {
      var x,id,x1,title,x2,metaDesc,x3,desc,x4,descHtml,x5,tags,formlet,x6,formlet1;
      x=Controls1.Input("");
      id=Enhance.WithTextLabel("Id",x);
      x1=Controls1.Input("");
      title=Enhance.WithTextLabel("Title",x1);
      x2=Controls1.Input("");
      metaDesc=Enhance.WithTextLabel("Meta Description",x2);
      x3=Controls1.TextArea("");
      desc=Enhance.WithTextLabel("Description",x3);
      x4=Controls1.TextArea("");
      descHtml=Enhance.WithTextLabel("Description HTML",x4);
      x5=Controls1.Input("");
      tags=Enhance.WithTextLabel("Tags",x5);
      formlet=Data.$(Data.$(Data.$(Data.$(Data.$(Data.$(Formlet1.Return(function(id1)
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
      }),id),title),metaDesc),desc),descHtml),tags);
      x6=Enhance.WithSubmitAndResetButtons(formlet);
      formlet1=Enhance.WithFormContainer(x6);
      return Formlet1.Run(Runtime.Tupled(function(x7)
      {
       return Concurrency.Start(Concurrency.Delay(function()
       {
        JavaScript.Log(x7);
        return Concurrency.Bind(Remoting.Async("Sitelet:4",[x7[0],x7[1],x7[2],x7[3],x7[4],x7[5]]),function(arg101)
        {
         if(arg101)
          {
           alert("New snippet inserted successfully.");
           return Concurrency.Return(null);
          }
         else
          {
           alert("The query failed.");
           return Concurrency.Return(null);
          }
        });
       }));
      }),formlet1);
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Client14.main();
     }
    })
   },
   Login:{
    Client:{
     loginForm:function(redirectUrl)
     {
      var userInput,x,arg00,submitBtn,arg102,arg103,arg104,arg105;
      userInput=Default.Input(List.ofArray([Default.Attr().NewAttr("type","text"),HTML5.Attr().NewAttr("autofocus","autofocus"),Default.Attr().Class("form-control"),Default.Attr().NewAttr("id","username")]));
      x=Operators1.add(Default.Button(List.ofArray([Default.Attr().NewAttr("type","button"),Default.Attr().Class("btn btn-primary btn-block"),Default.Id("login-btn")])),List.ofArray([Default.Text("Submit")]));
      arg00=function()
      {
       return function()
       {
        return Concurrency.Start(Concurrency.Delay(function()
        {
         return Concurrency.Bind(Remoting.Async("Sitelet:3",[{
          Name:userInput.get_Value(),
          Password:Client15.passInput().get_Value()
         }]),function(arg101)
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
       };
      };
      EventsPervasives.Events().OnClick(arg00,x);
      submitBtn=x;
      arg102=List.ofArray([Default.Attr().Class("form-group")]);
      arg103=List.ofArray([Default.Text("Username"),Default.Attr().NewAttr("for","username")]);
      arg104=List.ofArray([Default.Text("Password"),Default.Attr().NewAttr("for","password")]);
      arg105=List.ofArray([submitBtn]);
      return Operators1.add(Default.Form(List.ofArray([Default.Attr().NewAttr("role","form"),Default.Attr().NewAttr("id","signin")])),List.ofArray([Default.H2(List.ofArray([Default.Text("Please sign in")])),Operators1.add(Default.Tags().NewTag("fieldset",arg102),List.ofArray([Default.Tags().NewTag("label",arg103),userInput,Default.Tags().NewTag("label",arg104),Client15.passInput()])),Default.Tags().NewTag("fieldset",arg105)]));
     },
     passInput:Runtime.Field(function()
     {
      var x,arg00;
      x=Default.Input(List.ofArray([Default.Attr().NewAttr("type","password"),Default.Attr().Class("form-control"),Default.Attr().NewAttr("id","password")]));
      arg00=function()
      {
       return function(keyCode)
       {
        return keyCode.KeyCode===13?jQuery("#login-btn").click():null;
       };
      };
      EventsPervasives.Events().OnKeyDown(arg00,x);
      return x;
     })
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Client15.loginForm(this.redirectUrl);
     }
    })
   },
   Search:{
    Client:{
     main:function()
     {
      return Piglet1.Render(function(uriString)
      {
       return function(submit)
       {
        return Client16.view(uriString,submit);
       };
      },Piglet1.Run(function()
      {
       window.location.href="/search/"+Global.String(jQuery("#query").val())+"/1";
      },Client16.piglet("")));
     },
     piglet:function(init)
     {
      return Piglet1.WithSubmit(Validation.Is(function(value)
      {
       return Validation.NotEmpty(value);
      },"Please enter a search query.",Pervasives.op_LessMultiplyGreater(Piglet1.Return(function(x)
      {
       return x;
      }),Piglet1.Yield(init))));
     },
     view:function(uriString,submit)
     {
      var x,arg00;
      x=Operators1.add(Controls2.input("text",function(x1)
      {
       return x1;
      },function(x1)
      {
       return x1;
      },uriString),List.ofArray([Default.Attr().Class("form-control"),Default.Attr().NewAttr("id","query"),Default.Attr().NewAttr("type","text"),HTML5.Attr().NewAttr("autofocus","autofocus")]));
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
      return Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("input-group input-group-lg col-md-6 col-md-offset-3")])),List.ofArray([x,Operators1.add(Default.Span(List.ofArray([Default.Attr().Class("input-group-btn")])),List.ofArray([Operators1.add(Controls2.SubmitValidate(submit),List.ofArray([Default.Attr().Class("btn btn-primary"),Default.Attr().NewAttr("id","search-btn"),Default.Attr().NewAttr("value","Search"),HTML5.Attr().NewAttr("data-"+"loading-text","Please wait...")]))]))]));
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Client16.main();
     }
    })
   }
  }
 });
 Runtime.OnInit(function()
 {
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Html=Runtime.Safe(WebSharper.Html);
  Default=Runtime.Safe(Html.Default);
  List=Runtime.Safe(WebSharper.List);
  Arrays=Runtime.Safe(WebSharper.Arrays);
  Seq=Runtime.Safe(WebSharper.Seq);
  Operators=Runtime.Safe(WebSharper.Operators);
  Website=Runtime.Safe(Global.Website);
  Controls=Runtime.Safe(Website.Controls);
  Snippet10=Runtime.Safe(Controls.Snippet10);
  Client=Runtime.Safe(Snippet10.Client);
  HTML5=Runtime.Safe(Default.HTML5);
  T=Runtime.Safe(List.T);
  EventsPervasives=Runtime.Safe(Html.EventsPervasives);
  Operators1=Runtime.Safe(Html.Operators);
  Snippet11=Runtime.Safe(Controls.Snippet11);
  Client1=Runtime.Safe(Snippet11.Client);
  document=Runtime.Safe(Global.document);
  Snippet12=Runtime.Safe(Controls.Snippet12);
  Client2=Runtime.Safe(Snippet12.Client);
  Snippet13=Runtime.Safe(Controls.Snippet13);
  Client3=Runtime.Safe(Snippet13.Client);
  Snippet14=Runtime.Safe(Controls.Snippet14);
  Client4=Runtime.Safe(Snippet14.Client);
  jQuery=Runtime.Safe(Global.jQuery);
  Concurrency=Runtime.Safe(WebSharper.Concurrency);
  Remoting=Runtime.Safe(WebSharper.Remoting);
  Snippet15=Runtime.Safe(Controls.Snippet15);
  Client5=Runtime.Safe(Snippet15.Client);
  google=Runtime.Safe(Global.google);
  visualization=Runtime.Safe(google.visualization);
  DataTable=Runtime.Safe(visualization.DataTable);
  Snippet16=Runtime.Safe(Controls.Snippet16);
  Client6=Runtime.Safe(Snippet16.Client);
  LineChart=Runtime.Safe(visualization.LineChart);
  Date=Runtime.Safe(Global.Date);
  Number=Runtime.Safe(Global.Number);
  Snippet17=Runtime.Safe(Controls.Snippet17);
  Client7=Runtime.Safe(Snippet17.Client);
  Snippet18=Runtime.Safe(Controls.Snippet18);
  JS=Runtime.Safe(Snippet18.JS);
  JQueryUI=Runtime.Safe(WebSharper.JQueryUI);
  Tabs=Runtime.Safe(JQueryUI.Tabs);
  Snippet19=Runtime.Safe(Controls.Snippet19);
  window=Runtime.Safe(Global.window);
  Snippet2=Runtime.Safe(Controls.Snippet2);
  Client8=Runtime.Safe(Snippet2.Client);
  Snippet20=Runtime.Safe(Controls.Snippet20);
  Snippet21=Runtime.Safe(Controls.Snippet21);
  JS1=Runtime.Safe(Snippet21.JS);
  Snippet22=Runtime.Safe(Controls.Snippet22);
  JS2=Runtime.Safe(Snippet22.JS);
  String=Runtime.Safe(Global.String);
  Datepicker=Runtime.Safe(JQueryUI.Datepicker);
  Snippet25=Runtime.Safe(Controls.Snippet25);
  Client9=Runtime.Safe(Snippet25.Client);
  Snippet28=Runtime.Safe(Controls.Snippet28);
  Clienta=Runtime.Safe(Snippet28.Client);
  PieChart=Runtime.Safe(visualization.PieChart);
  Snippet29=Runtime.Safe(Controls.Snippet29);
  Snippet3=Runtime.Safe(Controls.Snippet3);
  Clientb=Runtime.Safe(Snippet3.Client);
  Snippet31=Runtime.Safe(Controls.Snippet31);
  Snippet32=Runtime.Safe(Controls.Snippet32);
  JS3=Runtime.Safe(Snippet32.JS);
  clearTimeout=Runtime.Safe(Global.clearTimeout);
  setTimeout=Runtime.Safe(Global.setTimeout);
  alert=Runtime.Safe(Global.alert);
  Snippet4=Runtime.Safe(Controls.Snippet4);
  Clientc=Runtime.Safe(Snippet4.Client);
  JavaScript=Runtime.Safe(WebSharper.JavaScript);
  Snippet5=Runtime.Safe(Controls.Snippet5);
  Clientd=Runtime.Safe(Snippet5.Client);
  Snippet6=Runtime.Safe(Controls.Snippet6);
  Cliente=Runtime.Safe(Snippet6.Client);
  Snippet7=Runtime.Safe(Controls.Snippet7);
  Clientf=Runtime.Safe(Snippet7.Client);
  WebSocket=Runtime.Safe(Global.WebSocket);
  Snippet8=Runtime.Safe(Controls.Snippet8);
  Client10=Runtime.Safe(Snippet8.Client);
  Snippet9=Runtime.Safe(Controls.Snippet9);
  Client11=Runtime.Safe(Snippet9.Client);
  Forkme=Runtime.Safe(Website.Forkme);
  Highlight=Runtime.Safe(Website.Highlight);
  Client12=Runtime.Safe(Highlight.Client);
  Formlet=Runtime.Safe(WebSharper.Formlet);
  Controls1=Runtime.Safe(Formlet.Controls);
  Enhance=Runtime.Safe(Formlet.Enhance);
  Data=Runtime.Safe(Formlet.Data);
  Formlet1=Runtime.Safe(Formlet.Formlet);
  Index=Runtime.Safe(Website.Index);
  Client13=Runtime.Safe(Index.Client);
  InsertSnippet=Runtime.Safe(Website.InsertSnippet);
  Client14=Runtime.Safe(InsertSnippet.Client);
  Login=Runtime.Safe(Website.Login);
  Client15=Runtime.Safe(Login.Client);
  Piglets=Runtime.Safe(WebSharper.Piglets);
  Piglet1=Runtime.Safe(Piglets.Piglet1);
  Search=Runtime.Safe(Website.Search);
  Client16=Runtime.Safe(Search.Client);
  Validation=Runtime.Safe(Piglet1.Validation);
  Pervasives=Runtime.Safe(Piglets.Pervasives);
  return Controls2=Runtime.Safe(Piglets.Controls);
 });
 Runtime.OnLoad(function()
 {
  Client15.passInput();
  Clienta.data();
  Client4.style();
  Client4.loremIpsum();
  return;
 });
}());
