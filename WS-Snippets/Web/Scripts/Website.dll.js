(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,Website,AddThis,WebSharper,Html,Default,HTML5,List,T,Controls,Snippet1,Client,Arrays,Seq,Operators,Snippet10,Client1,EventsPervasives,Operators1,Snippet11,Client2,document,Snippet12,Client3,Snippet13,Client4,Snippet14,Client5,jQuery,Remoting,Concurrency,Snippet15,Client6,Google,Visualization,Visualizations,LineChartOptions,google,visualization,DataTable,Snippet16,Client7,LineChart,Date,Number,Snippet17,Client8,Snippet18,JS,JQueryUI,Tabs,Snippet19,window,Snippet2,Client9,Snippet20,Snippet21,JS1,Snippet3,Clienta,Snippet4,Clientb,alert,JavaScript,Snippet5,Clientc,String,Snippet6,Clientd,Snippet7,Cliente,WebSocket,Snippet8,Clientf,Snippet9,Client10,Forkme,Highlight,Client11,Formlet,Controls1,Enhance,Data,Formlet1,Index,Client12,InsertSnippet,Client13,Login,Client14,encodeURIComponent,Strings,Search,Client15;
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
    Snippet12:{
     Client:{
      btn:function(caption,action)
      {
       var x,_this,f,x1;
       x=Default.Button(List.ofArray([Default.Attr().Class("btn"),(_this=Default.Attr(),_this.NewAttr("style","margin: 3px; width: 45px;")),Default.Text(caption)]));
       f=(x1=function()
       {
        return function()
        {
         return action(null);
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
       var patternInput,op,oldNum,num,display,_this,_this1,updateDisplay,d,c,ac,n1,e,o,digit;
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
       display=Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","text")),(_this1=Default.Attr(),_this1.NewAttr("value","0"))]));
       updateDisplay=function()
       {
        return display.set_Value(Global.String(num.contents));
       };
       d=function(n)
       {
        num.contents=10*num.contents+n;
        return updateDisplay(null);
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
       n1=function()
       {
        num.contents=-num.contents;
        return updateDisplay(null);
       };
       e=function()
       {
        var matchValue,f;
        matchValue=op.contents;
        if(matchValue.$==1)
         {
          f=matchValue.$0;
          num.contents=(f(oldNum.contents))(num.contents);
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
         var matchValue,f;
         matchValue=op.contents;
         if(matchValue.$==1)
          {
           f=matchValue.$0;
           num.contents=(f(oldNum.contents))(num.contents);
           updateDisplay(null);
          }
         oldNum.contents=num.contents;
         num.contents=0;
         op.contents={
          $:1,
          $0:_op_
         };
        };
       };
       digit=function(n)
       {
        return Client3.btn(Global.String(n),function()
        {
         return d(n);
        });
       };
       return Default.Div(List.ofArray([display,Default.Br(Runtime.New(T,{
        $:0
       })),Default.Div(List.ofArray([digit(7),digit(8),digit(9),Client3.btn("/",o(function(x)
       {
        return function(y)
        {
         return x/y>>0;
        };
       })),Default.Br(Runtime.New(T,{
        $:0
       })),digit(4),digit(5),digit(6),Client3.btn("*",o(function(x)
       {
        return function(y)
        {
         return x*y;
        };
       })),Default.Br(Runtime.New(T,{
        $:0
       })),digit(1),digit(2),digit(3),Client3.btn("-",o(function(x)
       {
        return function(y)
        {
         return x-y;
        };
       })),Default.Br(Runtime.New(T,{
        $:0
       })),digit(0),Client3.btn("C",c),Client3.btn("AC",ac),Client3.btn("+",o(function(x)
       {
        return function(y)
        {
         return x+y;
        };
       })),Default.Br(Runtime.New(T,{
        $:0
       })),Client3.btn("+/-",n1),Client3.btn("=",e)]))]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client3.main();
      }
     })
    },
    Snippet13:{
     Client:{
      main:function()
      {
       var elt,_this,x,objectArg,arg00,canvas,ctx;
       elt=(_this=HTML5.Tags(),(x=List.ofArray([Default.Text("The canvas element isn't supported by your browser.")]),_this.NewTag("canvas",x)));
       objectArg=elt["HtmlProvider@32"];
       (arg00=elt.Body,function(arg10)
       {
        return objectArg.SetStyle(arg00,arg10);
       })("border: 1px solid;");
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
       return Client4.main();
      }
     })
    },
    Snippet14:{
     Client:{
      accordionGroup:function(num)
      {
       var accordionBody,_this,jq,_this1,x,x1,_this2,x2,f,x3;
       accordionBody=Operators1.add(Default.Div(List.ofArray([(_this=Default.Attr(),_this.NewAttr("style","display: none;"))])),List.ofArray([Default.Div(List.ofArray([Default.Text(Client5.loremIpsum())]))]));
       jq=jQuery(accordionBody.Body);
       return Operators1.add(Default.Div(List.ofArray([(_this1=Default.Attr(),(x=Client5.style(),_this1.NewAttr("style",x)))])),List.ofArray([Default.Div(List.ofArray([(x1=Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("btn-link"),(_this2=Default.Attr(),_this2.NewAttr("style","font-weight: bold;"))])),List.ofArray([(x2="Collapsible Group "+Global.String(num),Default.Text(x2))])),(f=(x3=function()
       {
        return function()
        {
         var matchValue;
         matchValue=jq.is(":visible");
         if(matchValue)
          {
           return jq.slideUp("fast",function(value)
           {
            value;
           });
          }
         else
          {
           return jq.slideDown("fast",function(value)
           {
            value;
           });
          }
        };
       },function(arg10)
       {
        return EventsPervasives.Events().OnClick(x3,arg10);
       }),(f(x1),x1)))])),accordionBody]));
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
        return Client5.accordionGroup(num);
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
       return Client5.main();
      }
     })
    },
    Snippet15:{
     Client:{
      main:function()
      {
       var output,_this,input,_this1,_this2,x,_this3,f,x1;
       output=Default.Div(List.ofArray([(_this=Default.Attr(),_this.NewAttr("style","margin-top: 8px;"))]));
       input=Default.Input(List.ofArray([(_this1=Default.Attr(),_this1.NewAttr("type","text")),(_this2=HTML5.Attr(),_this2.NewAttr("autofocus","autofocus"))]));
       return Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("form-inline")])),List.ofArray([input,(x=Default.Button(List.ofArray([Default.Text("MD5"),Default.Attr().Class("btn btn-primary"),(_this3=Default.Attr(),_this3.NewAttr("style","margin-left: 8px;"))])),(f=(x1=function()
       {
        return function()
        {
         var x2,f1,f3;
         x2=(f1=function()
         {
          var x3,f2;
          x3=Remoting.Async("Website:0",[input.get_Value()]);
          f2=function(_arg11)
          {
           output.set_Text(_arg11);
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
       }),(f(x),x))),output]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client6.main();
      }
     })
    },
    Snippet16:{
     Client:{
      main:function()
      {
       var options,inputRecord,data,dataTable,x,f,x1,f1,x2,f2,x3,f3,x4,_this,f4,f5;
       options=(inputRecord=LineChartOptions.get_Default(),Runtime.New(LineChartOptions,{
        backgroundColor:inputRecord.backgroundColor,
        colors:inputRecord.colors,
        curveType:inputRecord.curveType,
        fontSize:inputRecord.fontSize,
        fontName:inputRecord.fontName,
        hAxis:inputRecord.hAxis,
        height:inputRecord.height,
        legend:inputRecord.legend,
        legendTextStyle:inputRecord.legendTextStyle,
        lineWidth:inputRecord.lineWidth,
        pointSize:inputRecord.pointSize,
        reverseCategories:inputRecord.reverseCategories,
        title:"Company Performance",
        titleTextStyle:inputRecord.titleTextStyle,
        tooltipTextStyle:inputRecord.tooltipTextStyle,
        vAxis:inputRecord.vAxis,
        width:inputRecord.width
       }));
       data=(dataTable=new DataTable(),(x=dataTable.addColumn("string","Year"),(f=function(value)
       {
        value;
       },f(x)),(x1=dataTable.addColumn("number","Sales"),(f1=function(value)
       {
        value;
       },f1(x1)),(x2=dataTable.addColumn("number","Expenses"),(f2=function(value)
       {
        value;
       },f2(x2)),(x3=dataTable.addRows(4),(f3=function(value)
       {
        value;
       },f3(x3)),(Client7.setCell(dataTable,0,0,"2004"),(Client7.setCell(dataTable,1,0,"2005"),(Client7.setCell(dataTable,2,0,"2006"),(Client7.setCell(dataTable,3,0,"2007"),(Client7.setCell(dataTable,0,1,1000),(Client7.setCell(dataTable,1,1,1170),(Client7.setCell(dataTable,2,1,660),(Client7.setCell(dataTable,3,1,1030),(Client7.setCell(dataTable,0,2,400),(Client7.setCell(dataTable,1,2,460),(Client7.setCell(dataTable,2,2,1120),(Client7.setCell(dataTable,3,2,540),dataTable)))))))))))))))));
       x4=Default.Div(List.ofArray([(_this=Default.Attr(),_this.NewAttr("style","width: 900px; height: 500px;"))]));
       f4=(f5=function(elt)
       {
        var geoMap;
        geoMap=new LineChart(elt.Body);
        return geoMap.draw(data,options);
       },function(w)
       {
        return Operators1.OnAfterRender(f5,w);
       });
       f4(x4);
       return x4;
      },
      setCell:function(dataTable,row,column,value)
      {
       var x,f;
       x=dataTable.setCell(row,column,value);
       f=function(value1)
       {
        value1;
       };
       return f(x);
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Client7.main();
      }
     })
    },
    Snippet17:{
     Client:{
      draw:function(ctx)
      {
       var now,i,i1,sec,min,hr,hr1,x,f;
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
       hr=(hr1=Number(now.getHours()),hr1>=12?hr1-12:hr1);
       ctx.fillStyle="black";
       ctx.save();
       x=3.14159265358979*(Number(hr)/6+Number(min)/360+Number(sec)/21600);
       f=function(arg00)
       {
        return ctx.rotate(arg00);
       };
       f(x);
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
       var f;
       f=function()
       {
        var x,f1;
        x=Concurrency.Sleep(1000);
        f1=function()
        {
         var x1,f2;
         Client8.draw(ctx);
         x1=Client8.loop(ctx);
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
       var elt,_this,x,canvas,ctx,computation,t;
       elt=(_this=HTML5.Tags(),(x=Runtime.New(T,{
        $:0
       }),_this.NewTag("canvas",x)));
       canvas=elt.Body;
       canvas.width=150;
       canvas.height=150;
       ctx=canvas.getContext("2d");
       Client8.draw(ctx);
       computation=Client8.loop(ctx);
       t={
        $:0
       };
       Concurrency.Start(computation);
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
       var x,el,_this,inner,f,x1;
       x=(el=Default.Button(List.ofArray([Default.Attr().Class("btn btn-success"),(_this=Default.Attr(),_this.NewAttr("style","margin-right: 8px;"))])),(inner=Default.Text("Add"),Operators1.add(el,List.ofArray([inner]))));
       f=(x1=function()
       {
        return function()
        {
         var patternInput,x2,label,elt;
         patternInput=(x2=tabs.get_Length()+1,JS.tab(x2));
         label=patternInput[0];
         elt=patternInput[1];
         return tabs.Add1(elt,label);
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
       var tabs,x,f,_this;
       tabs=(x=List.map(function(x1)
       {
        return JS.tab(x1);
       },Seq.toList(Operators.range(1,3))),(f=function(arg00)
       {
        return Tabs.New2(arg00);
       },f(x)));
       return Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("span10")])),List.ofArray([tabs,Operators1.add(Default.Div(List.ofArray([(_this=Default.Attr(),_this.NewAttr("style","margin-top: 8px;"))])),List.ofArray([JS.addTabBtn(tabs),JS.removeTabBtn(tabs)]))]));
      },
      removeTabBtn:function(tabs)
      {
       var x,el,inner,f,x1;
       x=(el=Default.Button(List.ofArray([Default.Attr().Class("btn btn-danger")])),(inner=Default.Text("Remove"),Operators1.add(el,List.ofArray([inner]))));
       f=(x1=function()
       {
        return function()
        {
         var index,matchValue;
         try
         {
          index=tabs.get_Length()-1;
          return jQuery(tabs.element.Body).tabs("remove",index);
         }
         catch(matchValue)
         {
          return null;
         }
        };
       },function(arg10)
       {
        return EventsPervasives.Events().OnClick(x1,arg10);
       });
       f(x);
       return x;
      },
      tab:function(x)
      {
       var xStr,x1;
       xStr=Global.String(x);
       return["Header "+xStr,Default.Div(List.ofArray([(x1="Tab "+xStr+" content",Default.Text(x1))]))];
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
      var x,el,inner,f,x1;
      x=(el=Default.Button(List.ofArray([Default.Attr().Class("btn btn-primary btn-large")])),(inner=Default.Text("Home Page"),Operators1.add(el,List.ofArray([inner]))));
      f=(x1=function()
      {
       return function()
       {
        return window.parent.location.assign("/");
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
     Client:{
      drawLogo:function(ctx)
      {
       ctx.font="60px 'Gill Sans Ultra Bold'";
       ctx.fillText("HTML",40,60);
       ctx.translate(0,70);
       Client9.drawShape(ctx,"#E34C26",44,255,List.ofArray([[22,5],[267,5],[244,255],[144,283]]));
       Client9.drawShape(ctx,"#F06529",144,262,List.ofArray([[225,239],[244,25],[144,25]]));
       Client9.drawShape(ctx,"#EBEBEB",144,118,List.ofArray([[103,118],[101,87],[144,87],[144,56],[67,56],[75,149],[144,149]]));
       Client9.drawShape(ctx,"#EBEBEB",144,198,List.ofArray([[110,189],[108,164],[77,164],[81,212],[144,230]]));
       Client9.drawShape(ctx,"#FFFFFF",144,118,List.ofArray([[144,149],[182,149],[178,189],[144,198],[144,230],[207,212],[215,118]]));
       return Client9.drawShape(ctx,"#FFFFFF",144,56,List.ofArray([[144,87],[218,87],[221,56]]));
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
       Client9.drawLogo(ctx);
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
    Snippet20:{
     Control:Runtime.Class({
      get_Body:function()
      {
       return Snippet20.main();
      }
     }),
     main:function()
     {
      var elt,_this,x,objectArg,arg00,canvas,ctx;
      elt=(_this=HTML5.Tags(),(x=List.ofArray([Default.Text("The canvas element isn't supported by your browser.")]),_this.NewTag("canvas",x)));
      objectArg=elt["HtmlProvider@32"];
      (arg00=elt.Body,function(arg10)
      {
       return objectArg.SetStyle(arg00,arg10);
      })("border: 1px solid;");
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
        var objectArg,arg00,objectArg1,arg001;
        e.preventDefault();
        objectArg=elt["HtmlProvider@32"];
        ((arg00=elt.Body,function(arg10)
        {
         return function(arg20)
         {
          return objectArg.SetCss(arg00,arg10,arg20);
         };
        })("background-color"))("lightgray");
        objectArg1=elt["HtmlProvider@32"];
        return((arg001=elt.Body,function(arg10)
        {
         return function(arg20)
         {
          return objectArg1.SetCss(arg001,arg10,arg20);
         };
        })("border"))("dotted");
       },false);
       dom.addEventListener("dragleave",function(e)
       {
        var objectArg,arg00,objectArg1,arg001;
        e.preventDefault();
        objectArg=elt["HtmlProvider@32"];
        ((arg00=elt.Body,function(arg10)
        {
         return function(arg20)
         {
          return objectArg.SetCss(arg00,arg10,arg20);
         };
        })("background-color"))("white");
        objectArg1=elt["HtmlProvider@32"];
        return((arg001=elt.Body,function(arg10)
        {
         return function(arg20)
         {
          return objectArg1.SetCss(arg001,arg10,arg20);
         };
        })("border"))("solid");
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
        objectArg=elt["HtmlProvider@32"];
        ((arg00=elt.Body,function(arg10)
        {
         return function(arg20)
         {
          return objectArg.SetCss(arg00,arg10,arg20);
         };
        })("background-color"))("white");
        objectArg1=elt["HtmlProvider@32"];
        return((arg001=elt.Body,function(arg10)
        {
         return function(arg20)
         {
          return objectArg1.SetCss(arg001,arg10,arg20);
         };
        })("border"))("black solid");
       },false);
      },
      img:function(x)
      {
       var arg00,_this,arg001,_this1,_this2;
       return Default.Img(List.ofArray([Default.Attr().Class("cat-img"),(arg00="cat-"+x,(_this=Default.Attr(),_this.NewAttr("id",arg00))),(arg001="/Images/cat"+x+".jpg",(_this1=Default.Attr(),_this1.NewAttr("src",arg001))),(_this2=HTML5.Attr(),_this2.NewAttr("draggable","true"))]));
      },
      imgDiv:function(img)
      {
       var _this;
       return Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("span3 cat-img-div"),(_this=Default.Attr(),_this.NewAttr("style","width: auto;"))])),List.ofArray([img]));
      },
      main:function()
      {
       var patternInput,img3,img2,img1,idRef,src,_this,target,_this1,el,_this2,inner,f,l;
       patternInput=[{
        contents:""
       },JS1.img("1"),JS1.img("2"),JS1.img("3")];
       img3=patternInput[3];
       img2=patternInput[2];
       img1=patternInput[1];
       idRef=patternInput[0];
       src=Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("row"),(_this=Default.Attr(),_this.NewAttr("id","src"))])),List.ofArray([JS1.imgDiv(img1),JS1.imgDiv(img2),JS1.imgDiv(img3)]));
       target=Operators1.add(Default.Div(List.ofArray([(_this1=Default.Attr(),_this1.NewAttr("id","target"))])),List.ofArray([(el=Default.P(List.ofArray([Default.Attr().Class("text-center"),(_this2=Default.Attr(),_this2.NewAttr("id","target-text"))])),(inner=Default.Text("Drop image here"),Operators1.add(el,List.ofArray([inner]))))]));
       f=function(elt)
       {
        return JS1.handleDragStart(idRef,elt);
       };
       l=List.ofArray([img1,img2,img3]);
       Seq.iter(f,l);
       JS1.handleDragging(target,idRef);
       return Default.Div(List.ofArray([src,target]));
      }
     }
    },
    Snippet3:{
     Client:{
      main:function()
      {
       var location,_this;
       location=window.location;
       return Operators1.add(Default.Table(List.ofArray([Default.Attr().Class("table table-bordered table-striped"),(_this=Default.Attr(),_this.NewAttr("style","width: 700px;"))])),List.ofArray([Default.TR(List.ofArray([Default.TH(List.ofArray([Default.Text("Property")])),Default.TH(List.ofArray([Default.Text("Value")]))])),Clienta.tr("Hash",location.hash),Clienta.tr("Host",location.host),Clienta.tr("Hostname",location.hostname),Clienta.tr("Href",location.href),Clienta.tr("Pathname",location.pathname),Clienta.tr("Port",location.port),Clienta.tr("Protocol",location.protocol),Clienta.tr("Search",location.search)]));
      },
      tr:function(td,_td_)
      {
       return Default.TR(List.ofArray([Default.TD(List.ofArray([Default.Text(td)])),Default.TD(List.ofArray([Default.Text(_td_)]))]));
      }
     },
     Control:Runtime.Class({
      get_Body:function()
      {
       return Clienta.main();
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
         x2=Remoting.Async("Website:1",[]);
         f3=function(_arg1)
         {
          var tweets,ul,_this,f4,action;
          if(_arg1.$==1)
           {
            tweets=_arg1.$0;
            ul=Default.UL(List.ofArray([(_this=Default.Attr(),_this.NewAttr("style","list-style-type: none;"))]));
            f4=(action=function(tweet)
            {
             return ul.AppendI(Clientb.li(tweet));
            },function(list)
            {
             return Seq.iter(action,list);
            });
            f4(tweets);
            elt.AppendI(ul);
            Clientb.toggleActionsVisibility();
            Clientb.handleTweetActions();
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
       return Clientb.main();
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
       return Clientc.main();
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
       Clientd.setText("longitude",txt);
       txt1=(copyOfStruct1=[coords.latitude],String(copyOfStruct1[0]));
       Clientd.setText("latitude",txt1);
       txt2=Clientd.toStr(coords.altitude);
       Clientd.setText("altitude",txt2);
       txt3=(copyOfStruct2=[coords.accuracy],String(copyOfStruct2[0]));
       Clientd.setText("accuracy",txt3);
       txt4=Clientd.toStr(coords.altitudeAccuracy);
       Clientd.setText("alt-acc",txt4);
       txt5=Clientd.toStr(coords.heading);
       Clientd.setText("heading",txt5);
       txt6=Clientd.toStr(coords.speed);
       Clientd.setText("speed",txt6);
       txt7=p.timestamp.toString();
       return Clientd.setText("timestamp",txt7);
      },
      getPosition:function()
      {
       var f;
       f=function()
       {
        window.navigator.geolocation.getCurrentPosition(function(p)
        {
         return Clientd.display(p);
        });
        return Concurrency.Return(null);
       };
       return Concurrency.Delay(f);
      },
      main:function()
      {
       var x,f,x1;
       return Operators1.add(Default.Div(List.ofArray([Default.Attr().Class("span6")])),List.ofArray([Operators1.add(Default.Table(List.ofArray([Default.Attr().Class("table table-striped table-bordered")])),List.ofArray([Clientd.tr("Longitude","longitude"),Clientd.tr("Latitude","latitude"),Clientd.tr("Altitude","altitude"),Clientd.tr("Accuracy","accuracy"),Clientd.tr("Altitude Accuracy","alt-acc"),Clientd.tr("Heading","heading"),Clientd.tr("Speed","speed"),Clientd.tr("Time Stamp","timestamp")])),(x=Default.Button(List.ofArray([Default.Text("Track My Location"),Default.Attr().Class("btn btn-primary btn-large")])),(f=(x1=function()
       {
        return function()
        {
         var x2,f1,f3;
         x2=(f1=function()
         {
          var x3,f2;
          x3=Clientd.getPosition();
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
       return Clientd.main();
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
       return Cliente.main();
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
         return Clientf.log("Sent: "+txt,"black");
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
       return Clientf.handleEvents(ws,disconnectBtn,sendBtn);
      },
      handleEvents:function(ws,disconnectBtn,sendBtn)
      {
       ws.onerror=function()
       {
        return Clientf.log("Error","red");
       };
       ws.onmessage=function(msg)
       {
        return Clientf.log("Received: "+String(msg.data),"blue");
       };
       ws.onopen=function()
       {
        Clientf.append("send-btn",sendBtn);
        Clientf.append("btns",disconnectBtn);
        return Clientf.log("Connected","green");
       };
       ws.onclose=function()
       {
        document.getElementById("connect-btn").removeAttribute("disabled");
        sendBtn["HtmlProvider@32"].Remove(sendBtn.Body);
        disconnectBtn["HtmlProvider@32"].Remove(disconnectBtn.Body);
        return Clientf.log("Disconnected","rgb(250, 167, 50)");
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
         return Clientf.connect(msgText);
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
       return Clientf.main();
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
       return Client10.main();
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
         x4=Remoting.Async("Website:2",[code]);
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
      return Default.Div(List.ofArray([Client11.highlightBtn(),Client11.clearBtn()]));
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Client11.main();
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
        x9=(id1=x7[0],(title1=x7[1],(desc1=x7[2],(code1=x7[3],Remoting.Async("Website:5",[id1,title1,desc1,code1])))));
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
      return Client12.main();
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
        xb=(id1=x9[0],(title1=x9[1],(metaDesc1=x9[2],(desc1=x9[3],(descHtml1=x9[4],(tags1=x9[5],Remoting.Async("Website:4",[id1,title1,metaDesc1,desc1,descHtml1,tags1])))))));
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
      return Client13.main();
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
         x3=Remoting.Async("Website:3",[{
          Name:userInput.get_Value(),
          Password:Client14.passInput().get_Value()
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
      return Default.Form(List.ofArray([(x4=List.ofArray([(x5=List.ofArray([Default.Text("Login")]),(_this4=Default.Tags(),_this4.NewTag("legend",x5))),(x6=List.ofArray([Default.Text("Username")]),(_this5=Default.Tags(),_this5.NewTag("label",x6))),userInput,(x7=List.ofArray([Default.Text("Password")]),(_this6=Default.Tags(),_this6.NewTag("label",x7))),Client14.passInput()]),(_this7=Default.Tags(),_this7.NewTag("fieldset",x4))),(x8=List.ofArray([submitBtn]),(_this8=Default.Tags(),_this8.NewTag("fieldset",x8)))]));
     },
     passInput:Runtime.Field(function()
     {
      var x,_this,_this1,f,x1;
      x=Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","password")),(_this1=HTML5.Attr(),_this1.NewAttr("placeholder","password"))]));
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
      return Client14.loginForm(this.redirectUrl);
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
      return Client15.main();
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
  Snippet12=Runtime.Safe(Controls.Snippet12);
  Client3=Runtime.Safe(Snippet12.Client);
  Snippet13=Runtime.Safe(Controls.Snippet13);
  Client4=Runtime.Safe(Snippet13.Client);
  Snippet14=Runtime.Safe(Controls.Snippet14);
  Client5=Runtime.Safe(Snippet14.Client);
  jQuery=Runtime.Safe(Global.jQuery);
  Remoting=Runtime.Safe(WebSharper.Remoting);
  Concurrency=Runtime.Safe(WebSharper.Concurrency);
  Snippet15=Runtime.Safe(Controls.Snippet15);
  Client6=Runtime.Safe(Snippet15.Client);
  Google=Runtime.Safe(WebSharper.Google);
  Visualization=Runtime.Safe(Google.Visualization);
  Visualizations=Runtime.Safe(Visualization.Visualizations);
  LineChartOptions=Runtime.Safe(Visualizations.LineChartOptions);
  google=Runtime.Safe(Global.google);
  visualization=Runtime.Safe(google.visualization);
  DataTable=Runtime.Safe(visualization.DataTable);
  Snippet16=Runtime.Safe(Controls.Snippet16);
  Client7=Runtime.Safe(Snippet16.Client);
  LineChart=Runtime.Safe(visualization.LineChart);
  Date=Runtime.Safe(Global.Date);
  Number=Runtime.Safe(Global.Number);
  Snippet17=Runtime.Safe(Controls.Snippet17);
  Client8=Runtime.Safe(Snippet17.Client);
  Snippet18=Runtime.Safe(Controls.Snippet18);
  JS=Runtime.Safe(Snippet18.JS);
  JQueryUI=Runtime.Safe(WebSharper.JQueryUI);
  Tabs=Runtime.Safe(JQueryUI.Tabs);
  Snippet19=Runtime.Safe(Controls.Snippet19);
  window=Runtime.Safe(Global.window);
  Snippet2=Runtime.Safe(Controls.Snippet2);
  Client9=Runtime.Safe(Snippet2.Client);
  Snippet20=Runtime.Safe(Controls.Snippet20);
  Snippet21=Runtime.Safe(Controls.Snippet21);
  JS1=Runtime.Safe(Snippet21.JS);
  Snippet3=Runtime.Safe(Controls.Snippet3);
  Clienta=Runtime.Safe(Snippet3.Client);
  Snippet4=Runtime.Safe(Controls.Snippet4);
  Clientb=Runtime.Safe(Snippet4.Client);
  alert=Runtime.Safe(Global.alert);
  JavaScript=Runtime.Safe(WebSharper.JavaScript);
  Snippet5=Runtime.Safe(Controls.Snippet5);
  Clientc=Runtime.Safe(Snippet5.Client);
  String=Runtime.Safe(Global.String);
  Snippet6=Runtime.Safe(Controls.Snippet6);
  Clientd=Runtime.Safe(Snippet6.Client);
  Snippet7=Runtime.Safe(Controls.Snippet7);
  Cliente=Runtime.Safe(Snippet7.Client);
  WebSocket=Runtime.Safe(Global.WebSocket);
  Snippet8=Runtime.Safe(Controls.Snippet8);
  Clientf=Runtime.Safe(Snippet8.Client);
  Snippet9=Runtime.Safe(Controls.Snippet9);
  Client10=Runtime.Safe(Snippet9.Client);
  Forkme=Runtime.Safe(Website.Forkme);
  Highlight=Runtime.Safe(Website.Highlight);
  Client11=Runtime.Safe(Highlight.Client);
  Formlet=Runtime.Safe(WebSharper.Formlet);
  Controls1=Runtime.Safe(Formlet.Controls);
  Enhance=Runtime.Safe(Formlet.Enhance);
  Data=Runtime.Safe(Formlet.Data);
  Formlet1=Runtime.Safe(Formlet.Formlet);
  Index=Runtime.Safe(Website.Index);
  Client12=Runtime.Safe(Index.Client);
  InsertSnippet=Runtime.Safe(Website.InsertSnippet);
  Client13=Runtime.Safe(InsertSnippet.Client);
  Login=Runtime.Safe(Website.Login);
  Client14=Runtime.Safe(Login.Client);
  encodeURIComponent=Runtime.Safe(Global.encodeURIComponent);
  Strings=Runtime.Safe(WebSharper.Strings);
  Search=Runtime.Safe(Website.Search);
  return Client15=Runtime.Safe(Search.Client);
 });
 Runtime.OnLoad(function()
 {
  Client14.passInput();
  Client5.style();
  Client5.loremIpsum();
 });
}());
