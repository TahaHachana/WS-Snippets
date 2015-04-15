(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,Piglets,Choose,Stream,Reader,Collections,Dictionary,List,T,Enumerator,Seq,Operators,Stream1,Result,ConcreteReader,Id,ConcreteWriter,ConstReader,Disposable,Html,Client,Operators1,Tags,EventsPervasives,Controls,Attr,Unchecked,jQuery,HtmlContainer,Arrays,ErrorMessage,Many,Stream2,Submitter,Operations,ResizeArray,ResizeArrayProxy,UnitStream,Pervasives,Concurrency,Piglet1,Stream3,Piglet,Validation,RegExp,Util,IntelliFactory,Reactive,HotStream;
 Runtime.Define(Global,{
  WebSharper:{
   Piglets:{
    Choose:{
     Stream:Runtime.Class({
      Choice:function(c,f)
      {
       var renders,hasChild,_this=this;
       renders=Dictionary.New12();
       hasChild={
        contents:false
       };
       this.subscriptions.contents=Runtime.New(T,{
        $:1,
        $0:this.pStream.SubscribeImmediate(function(res)
        {
         var p,i,render;
         if(res.$==0)
          {
           p=res.$0[1];
           i=res.$0[0];
           render=renders.ContainsKey(i)?renders.get_Item(i):p.view.call(null,f);
           _this.out.Trigger(p.stream.get_Latest());
           if(hasChild.contents)
            {
             c.Remove(0);
            }
           hasChild.contents=true;
           return c.Add(render);
          }
         else
          {
           return null;
          }
        }),
        $1:_this.subscriptions.contents
       });
       return c.get_Container();
      },
      Chooser:function(f)
      {
       return this.chooser.view.call(null,f);
      },
      Dispose:function()
      {
       var inputSequence,enumerator;
       inputSequence=this.subscriptions.contents;
       enumerator=Enumerator.Get(inputSequence);
       while(enumerator.MoveNext())
        {
         enumerator.get_Current().Dispose();
        }
       return Seq.iter(function(_arg3)
       {
        return(Operators.KeyValue(_arg3))[1][1].Dispose();
       },this.choiceSubscriptions);
      },
      Subscribe:function(f)
      {
       return this.out.Subscribe(f);
      },
      get_ChooserStream:function()
      {
       return this.chooser.stream;
      },
      get_Latest:function()
      {
       return this.out.get_Latest();
      }
     },{
      New:function(chooser,choice,out)
      {
       var r;
       r=Runtime.New(this,Reader.New(out.get_Id()));
       r.chooser=chooser;
       r.out=out;
       r.pStream=Stream1.New(Runtime.New(Result,{
        $:1,
        $0:Runtime.New(T,{
         $:0
        })
       }),{
        $:0
       });
       r.choiceSubscriptions=Dictionary.New12();
       r.subscriptions={
        contents:List.ofArray([r.chooser.stream.SubscribeImmediate(function(res)
        {
         return r.pStream.Trigger(Result.Map(function(i)
         {
          var _,p,objectArg;
          if(r.choiceSubscriptions.ContainsKey(i))
           {
            _=(r.choiceSubscriptions.get_Item(i))[0];
           }
          else
           {
            p=choice(i);
            objectArg=r.out;
            r.choiceSubscriptions.set_Item(i,[p,p.stream.Subscribe(function(arg00)
            {
             return objectArg.Trigger(arg00);
            })]);
            _=p;
           }
          return[i,_];
         },res));
        })])
       };
       return r;
      }
     })
    },
    ConcreteReader:Runtime.Class({
     Subscribe:function(f)
     {
      return this.subscribe.call(null,f);
     },
     get_Latest:function()
     {
      return this.latest.call(null,null);
     }
    },{
     New:function(latest,subscribe)
     {
      var r;
      r=Runtime.New(this,Reader.New((Id.next())(null)));
      r.latest=latest;
      r.subscribe=subscribe;
      return r;
     }
    }),
    ConcreteWriter:Runtime.Class({
     Trigger:function(x)
     {
      return this.trigger.call(null,x);
     }
    },{
     New:function(trigger)
     {
      var r;
      r=Runtime.New(this,{});
      r.trigger=trigger;
      return r;
     },
     New1:function(trigger)
     {
      return ConcreteWriter.New(function(_arg1)
      {
       return _arg1.$==1?null:trigger(_arg1.$0);
      });
     }
    }),
    ConstReader:Runtime.Class({
     Subscribe:function()
     {
      return Disposable.New(function()
      {
      });
     },
     get_Latest:function()
     {
      return this.x;
     }
    },{
     New:function(x)
     {
      var r;
      r=Runtime.New(this,Reader.New((Id.next())(null)));
      r.x=x;
      return r;
     }
    }),
    Controls:{
     Attr:function(reader,attrName,render,element)
     {
      Operators1.OnAfterRender(function(element1)
      {
       var set;
       set=function(x)
       {
        var value,objectArg,arg00;
        if(x.$==0)
         {
          value=render(x.$0);
          objectArg=element1["HtmlProvider@33"];
          arg00=element1.get_Body();
          return objectArg.SetAttribute(arg00,attrName,value);
         }
        else
         {
          return null;
         }
       };
       set(reader.get_Latest());
       reader.Subscribe(set);
       return;
      },element);
      return element;
     },
     AttrResult:function(reader,attrName,render,element)
     {
      Operators1.OnAfterRender(function(element1)
      {
       var set;
       set=function(x)
       {
        var value,objectArg,arg00;
        value=render(x);
        objectArg=element1["HtmlProvider@33"];
        arg00=element1.get_Body();
        return objectArg.SetAttribute(arg00,attrName,value);
       };
       set(reader.get_Latest());
       reader.Subscribe(set);
       return;
      },element);
      return element;
     },
     Button:function(submit)
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
        return submit.Trigger(Runtime.New(Result,{
         $:0,
         $0:null
        }));
       };
      };
      EventsPervasives.Events().OnClick(x2,x1);
      return x1;
     },
     ButtonValidate:function(submit)
     {
      var _arg10_;
      _arg10_=Controls.Button(submit);
      return Controls.EnableOnSuccess(submit.get_Input(),_arg10_);
     },
     CheckBox:function(stream)
     {
      var id,_this,x,_this1,_this2,i,matchValue,x1,ev;
      id=(Controls.nextId())(null);
      _this=Tags.Tags();
      _this1=Attr.Attr();
      _this2=Attr.Attr();
      x=List.ofArray([_this1.NewAttr("type","checkbox"),_this2.NewAttr("id",id)]);
      i=_this.NewTag("input",x);
      matchValue=stream.get_Latest();
      if(matchValue.$==0)
       {
        x1=matchValue.$0;
        i.get_Body().checked=x1;
       }
      stream.Subscribe(function(_arg1)
      {
       var x2;
       if(_arg1.$==1)
        {
         return null;
        }
       else
        {
         x2=_arg1.$0;
         return!Unchecked.Equals(i.get_Body().checked,x2)?void(i.get_Body().checked=x2):null;
        }
      });
      ev=function()
      {
       return stream.Trigger(Runtime.New(Result,{
        $:0,
        $0:i.get_Body().checked
       }));
      };
      i.get_Body().addEventListener("change",ev,true);
      return i;
     },
     Css:function(reader,attrName,render,element)
     {
      Operators1.OnAfterRender(function(element1)
      {
       var set;
       set=function(x)
       {
        var prop,objectArg,arg00;
        if(x.$==0)
         {
          prop=render(x.$0);
          objectArg=element1["HtmlProvider@33"];
          arg00=element1.get_Body();
          return objectArg.SetCss(arg00,attrName,prop);
         }
        else
         {
          return null;
         }
       };
       set(reader.get_Latest());
       reader.Subscribe(set);
       return;
      },element);
      return element;
     },
     CssResult:function(reader,attrName,render,element)
     {
      Operators1.OnAfterRender(function(element1)
      {
       var set;
       set=function(x)
       {
        var prop,objectArg,arg00;
        prop=render(x);
        objectArg=element1["HtmlProvider@33"];
        arg00=element1.get_Body();
        return objectArg.SetCss(arg00,attrName,prop);
       };
       set(reader.get_Latest());
       reader.Subscribe(set);
       return;
      },element);
      return element;
     },
     EnableOnSuccess:function(reader,element)
     {
      Operators1.OnAfterRender(function(el)
      {
       el.get_Body().disabled=!reader.get_Latest().get_isSuccess();
       reader.Subscribe(function(x)
       {
        el.get_Body().disabled=!x.get_isSuccess();
       });
       return;
      },element);
      return element;
     },
     HtmlContainer:Runtime.Class({
      Add:function(elt)
      {
       return this.container.AppendI(elt);
      },
      MoveUp:function(i)
      {
       var elt_i,elt_i_1;
       elt_i=this.container.get_Body().childNodes[i];
       elt_i_1=this.container.get_Body().childNodes[i-1];
       this.container.get_Body().removeChild(elt_i);
       this.container.get_Body().insertBefore(elt_i,elt_i_1);
       return;
      },
      Remove:function(i)
      {
       this.container.get_Body().removeChild(this.container.get_Body().childNodes[i]);
      },
      get_Container:function()
      {
       return this.container;
      }
     },{
      New:function(container)
      {
       var r;
       r=Runtime.New(this,{});
       r.container=container;
       return r;
      }
     }),
     IntInput:function(stream)
     {
      return Controls.input("number",function(value)
      {
       return value<<0;
      },function(value)
      {
       return Global.String(value);
      },stream);
     },
     Link:function(submit)
     {
      var x,_this,_this1,x1;
      _this=Attr.Attr();
      x=List.ofArray([_this.NewAttr("href","#")]);
      _this1=Tags.Tags();
      x1=_this1.NewTag("a",x);
      Operators1.OnAfterRender(function(e)
      {
       return jQuery(e.get_Body()).on("click",function(ev)
       {
        submit.Trigger(Runtime.New(Result,{
         $:0,
         $0:null
        }));
        return ev.preventDefault();
       });
      },x1);
      return x1;
     },
     Radio:function(stream,values)
     {
      var name,values1,elts,set;
      name=(Controls.nextId())(null);
      values1=List.ofSeq(values);
      elts=List.map(function(x)
      {
       var _this,x1,_this1,_this2,x2,x3;
       _this=Tags.Tags();
       _this1=Attr.Attr();
       _this2=Attr.Attr();
       x1=List.ofArray([_this1.NewAttr("type","radio"),_this2.NewAttr("name",name)]);
       x2=_this.NewTag("input",x1);
       x3=function(div)
       {
        return div.get_Body().checked?stream.Trigger(Runtime.New(Result,{
         $:0,
         $0:x
        })):null;
       };
       EventsPervasives.Events().OnChange(x3,x2);
       return x2;
      },values1);
      set=function(_arg1)
      {
       var v;
       if(_arg1.$==1)
        {
         return null;
        }
       else
        {
         v=_arg1.$0;
         return List.iter2(function(x)
         {
          return function(input)
          {
           input.get_Body().checked=Unchecked.Equals(x,v);
          };
         },values1,elts);
        }
      };
      set(stream.get_Latest());
      stream.Subscribe(set);
      return elts;
     },
     RadioLabelled:function(stream,values)
     {
      var y,x,_this4;
      y=Controls.Radio(stream,Seq.map(function(tuple)
      {
       return tuple[0];
      },values));
      x=Seq.mapi2(function(tupledArg)
      {
       var _arg1,label;
       _arg1=tupledArg[0];
       label=tupledArg[1];
       return function(input)
       {
        var id,x1,_this,x2,_this1,_this2,_this3;
        id=(Controls.nextId())(null);
        _this=Attr.Attr();
        _this1=Attr.Attr();
        x2=List.ofArray([_this1.NewAttr("for",id),Tags.Tags().text(label)]);
        _this2=Tags.Tags();
        x1=List.ofArray([Operators1.add(input,List.ofArray([_this.NewAttr("id",id)])),_this2.NewTag("label",x2)]);
        _this3=Tags.Tags();
        return _this3.NewTag("span",x1);
       };
      },values,y);
      _this4=Tags.Tags();
      return _this4.NewTag("div",x);
     },
     RenderChoice:function(choice,renderIt,container)
     {
      return choice.Choice(HtmlContainer.New(container),renderIt);
     },
     RenderMany:function(many,renderOne,container)
     {
      return many.Render(HtmlContainer.New(container),renderOne);
     },
     Select:function(stream,values)
     {
      var name,values1,elts,_this2,x1,x2,x3;
      name=(Controls.nextId())(null);
      values1=Arrays.ofSeq(values);
      elts=Arrays.map(function(tupledArg)
      {
       var label,id,_this,x,_this1;
       label=tupledArg[1];
       id=(Controls.nextId())(null);
       _this=Tags.Tags();
       _this1=Attr.Attr();
       x=List.ofArray([_this1.NewAttr("value",id)]);
       return Operators1.add(_this.NewTag("option",x),List.ofArray([Tags.Tags().text(label)]));
      },values1);
      _this2=Tags.Tags();
      x1=_this2.NewTag("select",elts);
      x2=function(e)
      {
       return e.get_Body().selectedIndex>=0?stream.Trigger(Runtime.New(Result,{
        $:0,
        $0:(Arrays.get(values1,e.get_Body().selectedIndex))[0]
       })):null;
      };
      EventsPervasives.Events().OnChange(x2,x1);
      x3=x1;
      Operators1.OnAfterRender(function()
      {
       stream.SubscribeImmediate(function(_arg1)
       {
        var v,matchValue,_this,objectArg,arg00;
        if(_arg1.$==1)
         {
          return null;
         }
        else
         {
          v=_arg1.$0;
          matchValue=Arrays.tryFindIndex(function(tupledArg)
          {
           return Unchecked.Equals(v,tupledArg[0]);
          },values1);
          if(matchValue.$==0)
           {
            return null;
           }
          else
           {
            _this=Arrays.get(elts,matchValue.$0);
            objectArg=_this["HtmlProvider@33"];
            arg00=_this.get_Body();
            return objectArg.SetAttribute(arg00,"selected","");
           }
         }
       });
      },x3);
      return x3;
     },
     Show:function(reader,render,container)
     {
      return Controls.ShowResult(reader,function(_arg1)
      {
       return _arg1.$==1?Seq.empty():render(_arg1.$0);
      },container);
     },
     ShowErrors:function(reader,render,container)
     {
      return Controls.ShowResult(reader,function(_arg1)
      {
       return _arg1.$==1?render(List.map(function(m)
       {
        return m.get_Message();
       },_arg1.$0)):Seq.empty();
      },container);
     },
     ShowResult:function(reader,render,container)
     {
      var inputSequence,enumerator;
      inputSequence=render(reader.get_Latest());
      enumerator=Enumerator.Get(inputSequence);
      while(enumerator.MoveNext())
       {
        container.AppendI(enumerator.get_Current());
       }
      reader.Subscribe(function(x)
      {
       var inputSequence1,enumerator1;
       container["HtmlProvider@33"].Clear(container.get_Body());
       inputSequence1=render(x);
       enumerator1=Enumerator.Get(inputSequence1);
       while(enumerator1.MoveNext())
        {
         container.AppendI(enumerator1.get_Current());
        }
       return;
      });
      return container;
     },
     ShowString:function(reader,render,container)
     {
      return Controls.Show(reader,function(x)
      {
       var x1;
       x1=render(x);
       return List.ofArray([Tags.Tags().text(x1)]);
      },container);
     },
     Submit:function(submit)
     {
      var _this,x,_this1,x1,x2;
      _this=Tags.Tags();
      _this1=Attr.Attr();
      x=List.ofArray([_this1.NewAttr("type","submit")]);
      x1=_this.NewTag("input",x);
      x2=function()
      {
       return function()
       {
        return submit.Trigger(Runtime.New(Result,{
         $:0,
         $0:null
        }));
       };
      };
      EventsPervasives.Events().OnClick(x2,x1);
      return x1;
     },
     SubmitValidate:function(submit)
     {
      var _arg10_;
      _arg10_=Controls.Submit(submit);
      return Controls.EnableOnSuccess(submit.get_Input(),_arg10_);
     },
     TextArea:function(stream)
     {
      var _this,x,i,matchValue,ev;
      _this=Tags.Tags();
      x=Runtime.New(T,{
       $:0
      });
      i=_this.NewTag("textarea",x);
      matchValue=stream.get_Latest();
      if(matchValue.$==0)
       {
        i.set_Value(matchValue.$0);
       }
      stream.Subscribe(function(_arg1)
      {
       var x1;
       if(_arg1.$==1)
        {
         return null;
        }
       else
        {
         x1=_arg1.$0;
         return i.get_Value()!==x1?i.set_Value(x1):null;
        }
      });
      ev=function()
      {
       return stream.Trigger(Runtime.New(Result,{
        $:0,
        $0:i.get_Value()
       }));
      };
      i.get_Body().addEventListener("keyup",ev,true);
      i.get_Body().addEventListener("change",ev,true);
      return i;
     },
     WithLabel:function(label,element)
     {
      var id,x,x1,_this,_this1,_this2,_this3;
      id=(Controls.nextId())(null);
      _this=Attr.Attr();
      x1=List.ofArray([_this.NewAttr("for",id),Tags.Tags().text(label)]);
      _this1=Tags.Tags();
      _this2=Attr.Attr();
      x=List.ofArray([_this1.NewTag("label",x1),Operators1.add(element,List.ofArray([_this2.NewAttr("id",id)]))]);
      _this3=Tags.Tags();
      return _this3.NewTag("span",x);
     },
     WithLabelAfter:function(label,element)
     {
      var id,x,_this,x1,_this1,_this2,_this3;
      id=(Controls.nextId())(null);
      _this=Attr.Attr();
      _this1=Attr.Attr();
      x1=List.ofArray([_this1.NewAttr("for",id),Tags.Tags().text(label)]);
      _this2=Tags.Tags();
      x=List.ofArray([Operators1.add(element,List.ofArray([_this.NewAttr("id",id)])),_this2.NewTag("label",x1)]);
      _this3=Tags.Tags();
      return _this3.NewTag("span",x);
     },
     input:function(type,ofString,toString,stream)
     {
      var _this,x,_this1,i,matchValue,ev;
      _this=Tags.Tags();
      _this1=Attr.Attr();
      x=List.ofArray([_this1.NewAttr("type",type)]);
      i=_this.NewTag("input",x);
      matchValue=stream.get_Latest();
      if(matchValue.$==0)
       {
        i.set_Value(toString(matchValue.$0));
       }
      stream.Subscribe(function(_arg1)
      {
       var s;
       if(_arg1.$==1)
        {
         return null;
        }
       else
        {
         s=toString(_arg1.$0);
         return i.get_Value()!==s?i.set_Value(s):null;
        }
      });
      ev=function()
      {
       var v;
       v=Runtime.New(Result,{
        $:0,
        $0:ofString(i.get_Value())
       });
       return!Unchecked.Equals(v,stream.get_Latest())?stream.Trigger(v):null;
      };
      i.get_Body().addEventListener("keyup",ev,true);
      i.get_Body().addEventListener("change",ev,true);
      return i;
     },
     nextId:Runtime.Field(function()
     {
      var _current_26_2;
      _current_26_2={
       contents:0
      };
      return function()
      {
       Operators.Increment(_current_26_2);
       return"pl__"+Global.String(_current_26_2.contents);
      };
     })
    },
    Disposable:Runtime.Class({
     Dispose:function()
     {
      return this.dispose.call(null,null);
     }
    },{
     New:function(dispose)
     {
      var r;
      r=Runtime.New(this,{});
      r.dispose=dispose;
      return r;
     }
    }),
    ErrorMessage:Runtime.Class({
     get_Message:function()
     {
      return this.message;
     },
     get_Source:function()
     {
      return this.source;
     }
    },{
     Create:function(msg,reader)
     {
      return ErrorMessage.New(msg,reader.get_Id());
     },
     New:function(message,source)
     {
      var r;
      r=Runtime.New(this,{});
      r.message=message;
      r.source=source;
      return r;
     }
    }),
    Id:{
     next:Runtime.Field(function()
     {
      var _current_28_3;
      _current_28_3={
       contents:0
      };
      return function()
      {
       Operators.Increment(_current_28_3);
       return _current_28_3.contents;
      };
     })
    },
    Many:{
     Operations:Runtime.Class({
      get_Delete:function()
      {
       return ConcreteWriter.New1(this["delete"]);
      },
      get_MoveDown:function()
      {
       return this.moveDown;
      },
      get_MoveUp:function()
      {
       return this.moveUp;
      }
     },{
      New:function(_delete,moveUp,moveDown)
      {
       var r;
       r=Runtime.New(this,{});
       r["delete"]=_delete;
       r.moveUp=moveUp;
       r.moveDown=moveDown;
       return r;
      }
     }),
     Stream:Runtime.Class({
      AddRender:function(f)
      {
       return this.adder.view.call(null,f);
      },
      Render:function(c,f)
      {
       var add,_this=this,matchValue;
       add=function(x)
       {
        var piglet,getThisIndex,moveUp,moveDown,moveUp1,canMoveUp,canMoveDown,inMoveUp,inMoveDown,outSubscription,subMoveUp,subMoveDown,subUpSubscription,subDownSubscription;
        piglet=_this.p.call(null,x);
        _this.streams.Add(piglet.stream);
        piglet.stream.SubscribeImmediate(function()
        {
         return _this.update();
        });
        getThisIndex=function()
        {
         return Seq.findIndex(function(x1)
         {
          return x1.get_Id()===piglet.stream.get_Id();
         },_this.streams);
        };
        moveUp=function(i)
        {
         var s;
         if(i>0?i<_this.streams.get_Count():false)
          {
           s=_this.streams.get_Item(i);
           _this.streams.set_Item(i,_this.streams.get_Item(i-1));
           _this.streams.set_Item(i-1,s);
           c.MoveUp(i);
           return _this.update();
          }
         else
          {
           return null;
          }
        };
        moveDown=function()
        {
         return moveUp(getThisIndex(null)+1);
        };
        moveUp1=function()
        {
         return moveUp(getThisIndex(null));
        };
        canMoveUp=function()
        {
         return getThisIndex(null)>0?Runtime.New(Result,{
          $:0,
          $0:null
         }):Runtime.New(Result,{
          $:1,
          $0:Runtime.New(T,{
           $:0
          })
         });
        };
        canMoveDown=function()
        {
         return getThisIndex(null)<_this.streams.get_Count()-1?Runtime.New(Result,{
          $:0,
          $0:null
         }):Runtime.New(Result,{
          $:1,
          $0:Runtime.New(T,{
           $:0
          })
         });
        };
        inMoveUp=Stream1.New(canMoveUp(null),{
         $:0
        });
        inMoveDown=Stream1.New(canMoveDown(null),{
         $:0
        });
        outSubscription=_this.out.Subscribe(function()
        {
         inMoveUp.Trigger(canMoveUp(null));
         return inMoveDown.Trigger(canMoveDown(null));
        });
        subMoveUp=Submitter.New(inMoveUp,false);
        subMoveDown=Submitter.New(inMoveDown,false);
        subUpSubscription=subMoveUp.Subscribe(Result.Iter(moveUp1));
        subDownSubscription=subMoveDown.Subscribe(Result.Iter(moveDown));
        return c.Add(piglet.view.call(null,f(Operations.New(function()
        {
         var i;
         i=getThisIndex(null);
         _this.streams.RemoveAt(i);
         c.Remove(i);
         outSubscription.Dispose();
         subUpSubscription.Dispose();
         subDownSubscription.Dispose();
         return _this.update();
        },subMoveUp,subMoveDown))));
       };
       matchValue=_this.out.get_Latest();
       if(matchValue.$==0)
        {
         Arrays.iter(add,matchValue.$0);
        }
       _this.adder.stream.Subscribe(function(_arg1)
       {
        return _arg1.$==0?add(_arg1.$0):null;
       });
       return c.get_Container();
      },
      Subscribe:function(f)
      {
       return this.out.Subscribe(f);
      },
      get_Add:function()
      {
       return this.adder.stream;
      },
      get_Latest:function()
      {
       return this.out.get_Latest();
      },
      update:function()
      {
       var objectArg;
       objectArg=this.out;
       return objectArg.Trigger(Result.Map(function(x)
       {
        var list;
        list=List.rev(x);
        return Arrays.ofSeq(list);
       },Seq.fold(function(acc)
       {
        return function(cur)
        {
         var matchValue,m1,m2;
         matchValue=[acc,cur.get_Latest()];
         if(matchValue[0].$==1)
          {
           if(matchValue[1].$==1)
            {
             m1=matchValue[0].$0;
             m2=matchValue[1].$0;
             return Runtime.New(Result,{
              $:1,
              $0:List.append(m2,m1)
             });
            }
           else
            {
             return Runtime.New(Result,{
              $:1,
              $0:matchValue[0].$0
             });
            }
          }
         else
          {
           return matchValue[1].$==1?Runtime.New(Result,{
            $:1,
            $0:matchValue[1].$0
           }):Runtime.New(Result,{
            $:0,
            $0:Runtime.New(T,{
             $:1,
             $0:matchValue[1].$0,
             $1:matchValue[0].$0
            })
           });
          }
        };
       },Runtime.New(Result,{
        $:0,
        $0:Runtime.New(T,{
         $:0
        })
       }),this.streams)));
      }
     },{
      New:function(p,out,adder)
      {
       var r;
       r=Runtime.New(this,Reader.New(out.get_Id()));
       r.p=p;
       r.out=out;
       r.adder=adder;
       r.streams=ResizeArrayProxy.New2();
       return r;
      }
     }),
     UnitStream:Runtime.Class({
      get_Add:function()
      {
       return this.submitStream;
      }
     },{
      New:function(p,out,init,_default)
      {
       var r,submitter,objectArg,trigger;
       r=Runtime.New(this,Stream2.New(p,out,init));
       submitter=Stream1.New(Runtime.New(Result,{
        $:1,
        $0:Runtime.New(T,{
         $:0
        })
       }),{
        $:0
       });
       objectArg=init.get_Stream();
       trigger=function(arg00)
       {
        return objectArg.Trigger(arg00);
       };
       submitter.Subscribe(function(_arg1)
       {
        return _arg1.$==0?trigger(Runtime.New(Result,{
         $:0,
         $0:_default
        })):trigger(Runtime.New(Result,{
         $:1,
         $0:_arg1.$0
        }));
       });
       r.submitStream=submitter;
       return r;
      }
     })
    },
    Pervasives:{
     "Writer`1.Wrap.Static":function(f,r)
     {
      return ConcreteWriter.New(function(a)
      {
       return r.Trigger(Result.Map(f,a));
      });
     },
     "Writer`1.WrapAsync.Static":function(f,r)
     {
      return Pervasives["Writer`1.WrapToAsyncResult.Static"](function(b)
      {
       var f1;
       f1=function()
       {
        var x,f2;
        x=f(b);
        f2=function(_arg2)
        {
         var x1;
         x1=Runtime.New(Result,{
          $:0,
          $0:_arg2
         });
         return Concurrency.Return(x1);
        };
        return Concurrency.Bind(x,f2);
       };
       return Concurrency.Delay(f1);
      },r);
     },
     "Writer`1.WrapAsyncResult.Static":function(f,r)
     {
      return ConcreteWriter.New(function(ra)
      {
       var f1,arg00,t;
       f1=function()
       {
        var x,f2;
        x=f(ra);
        f2=function(_arg1)
        {
         r.Trigger(_arg1);
         return Concurrency.Return(null);
        };
        return Concurrency.Bind(x,f2);
       };
       arg00=Concurrency.Delay(f1);
       t={
        $:0
       };
       return Concurrency.Start(arg00,t);
      });
     },
     "Writer`1.WrapResult.Static":function(f,r)
     {
      return ConcreteWriter.New(function(a)
      {
       return r.Trigger(f(a));
      });
     },
     "Writer`1.WrapToAsyncResult.Static":function(f,r)
     {
      return Pervasives["Writer`1.WrapAsyncResult.Static"](function(b)
      {
       var f1;
       f1=function()
       {
        var x,x1;
        if(b.$==1)
         {
          x=Runtime.New(Result,{
           $:1,
           $0:b.$0
          });
          return Concurrency.Return(x);
         }
        else
         {
          x1=f(b.$0);
          return x1;
         }
       };
       return Concurrency.Delay(f1);
      },r);
     },
     "Writer`1.WrapToResult.Static":function(f,r)
     {
      return ConcreteWriter.New(function(a)
      {
       return r.Trigger((Result.Bind(f))(a));
      });
     },
     op_LessMultiplyGreater:function(f,x)
     {
      var f1,g;
      f1=f.view;
      g=x.view;
      return Runtime.New(Piglet1,{
       stream:Stream3.Ap(f.stream,x.stream),
       view:function(x1)
       {
        return g(f1(x1));
       }
      });
     },
     op_LessMultiplyQmarkGreater:function(f,x)
     {
      var f1,g;
      f1=f.view;
      g=x.view;
      return Runtime.New(Piglet1,{
       stream:Stream3.ApJoin(f.stream,x.stream),
       view:function(x1)
       {
        return g(f1(x1));
       }
      });
     }
    },
    Piglet:{
     Builder:Runtime.Class({
      Bind:function(p,f)
      {
       return Piglet.Choose(p,f);
      },
      Return:function(x)
      {
       return Piglet.Return(x);
      },
      ReturnFrom:function(p)
      {
       return p;
      },
      Yield:function(x)
      {
       return Piglet.Yield(x);
      },
      YieldFrom:function(p)
      {
       return p;
      },
      Zero:function()
      {
       return Piglet.ReturnFailure();
      }
     }),
     Choose:function(chooser,choices)
     {
      var s,c;
      s=Stream1.New(Runtime.New(Result,{
       $:1,
       $0:Runtime.New(T,{
        $:0
       })
      }),{
       $:0
      });
      c=Stream.New(chooser,choices,s);
      return Runtime.New(Piglet1,{
       stream:s,
       view:function(f)
       {
        return f(c);
       }
      });
     },
     Confirm:function(init,validate,nomatch)
     {
      var second,_arg20_;
      second=Piglet.Yield(init);
      _arg20_=Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Piglet.Return(function(a)
      {
       return function(b)
       {
        return[a,b];
       };
      }),validate(Piglet.Yield(init))),second);
      return Piglet.MapViewArgs(function(a)
      {
       return function(b)
       {
        return[a,b];
       };
      },Piglet.Map(function(tuple)
      {
       return tuple[0];
      },Validation["Is'"](function(tupledArg)
      {
       return Unchecked.Equals(tupledArg[0],tupledArg[1]);
      },ErrorMessage.Create(nomatch,second.get_Stream()),_arg20_)));
     },
     FlushErrors:function(p)
     {
      return Piglet.MapResult(function(_arg1)
      {
       return _arg1.$==1?Runtime.New(Result,{
        $:1,
        $0:Runtime.New(T,{
         $:0
        })
       }):_arg1;
      },p);
     },
     Many:function(init,p)
     {
      return Piglet.ManyInit([init],init,p);
     },
     ManyInit:function(inits,init,p)
     {
      var s,m;
      s=Stream1.New(Runtime.New(Result,{
       $:0,
       $0:inits
      }),{
       $:0
      });
      m=UnitStream.New(p,s,p(init),init);
      return Runtime.New(Piglet1,{
       stream:s,
       view:function(f)
       {
        return f(m);
       }
      });
     },
     ManyPiglet:function(inits,create,p)
     {
      var s,m;
      s=Stream1.New(Runtime.New(Result,{
       $:0,
       $0:inits
      }),{
       $:0
      });
      m=Stream2.New(p,s,create);
      return Runtime.New(Piglet1,{
       stream:s,
       view:function(f)
       {
        return f(m);
       }
      });
     },
     Map:function(m,p)
     {
      return Piglet.MapResult(function(_arg1)
      {
       return _arg1.$==0?Runtime.New(Result,{
        $:0,
        $0:m(_arg1.$0)
       }):Runtime.New(Result,{
        $:1,
        $0:_arg1.$0
       });
      },p);
     },
     MapAsync:function(m,p)
     {
      return Piglet.MapAsyncResult(function(_arg1)
      {
       var x,f,x3;
       if(_arg1.$==0)
        {
         x=_arg1.$0;
         f=function()
         {
          var x1,f1;
          x1=m(x);
          f1=function(_arg2)
          {
           var x2;
           x2=Runtime.New(Result,{
            $:0,
            $0:_arg2
           });
           return Concurrency.Return(x2);
          };
          return Concurrency.Bind(x1,f1);
         };
         return Concurrency.Delay(f);
        }
       else
        {
         x3=Runtime.New(Result,{
          $:1,
          $0:_arg1.$0
         });
         return Concurrency.Return(x3);
        }
      },p);
     },
     MapAsyncResult:function(m,p)
     {
      var out,f2,arg001,t1;
      out=Stream1.New(Runtime.New(Result,{
       $:1,
       $0:Runtime.New(T,{
        $:0
       })
      }),{
       $:0
      });
      p.stream.Subscribe(function(v)
      {
       var f,arg00,t;
       f=function()
       {
        var x,f1;
        x=m(v);
        f1=function(_arg1)
        {
         var x1;
         x1=out.Trigger(_arg1);
         return Concurrency.Return(x1);
        };
        return Concurrency.Bind(x,f1);
       };
       arg00=Concurrency.Delay(f);
       t={
        $:0
       };
       return Concurrency.Start(arg00,t);
      });
      f2=function()
      {
       var x,f;
       x=m(p.stream.get_Latest());
       f=function(_arg2)
       {
        var x1;
        x1=out.Trigger(_arg2);
        return Concurrency.Return(x1);
       };
       return Concurrency.Bind(x,f);
      };
      arg001=Concurrency.Delay(f2);
      t1={
       $:0
      };
      Concurrency.Start(arg001,t1);
      return Runtime.New(Piglet1,{
       stream:out,
       view:p.view
      });
     },
     MapResult:function(m,p)
     {
      var out;
      out=Stream1.New(m(p.stream.get_Latest()),{
       $:0
      });
      p.stream.Subscribe(function(x)
      {
       return out.Trigger(m(x));
      });
      return Runtime.New(Piglet1,{
       stream:out,
       view:p.view
      });
     },
     MapResultWithWriter:function(f,p)
     {
      var stream;
      stream=Stream1.New(Runtime.New(Result,{
       $:1,
       $0:Runtime.New(T,{
        $:0
       })
      }),{
       $:0
      });
      p.stream.SubscribeImmediate(f(stream));
      return Runtime.New(Piglet1,{
       stream:stream,
       view:p.view
      });
     },
     MapToAsyncResult:function(m,p)
     {
      return Piglet.MapAsyncResult(function(_arg1)
      {
       var x;
       if(_arg1.$==0)
        {
         return m(_arg1.$0);
        }
       else
        {
         x=Runtime.New(Result,{
          $:1,
          $0:_arg1.$0
         });
         return Concurrency.Return(x);
        }
      },p);
     },
     MapToResult:function(m,p)
     {
      return Piglet.MapResult(function(_arg1)
      {
       return _arg1.$==0?m(_arg1.$0):Runtime.New(Result,{
        $:1,
        $0:_arg1.$0
       });
      },p);
     },
     MapViewArgs:function(view,p)
     {
      var _arg00_;
      _arg00_=p.view;
      return Runtime.New(Piglet1,{
       stream:p.stream,
       view:function(_arg20_)
       {
        return _arg20_(_arg00_(view));
       }
      });
     },
     MapWithWriter:function(f,p)
     {
      return Piglet.MapResultWithWriter(function(out)
      {
       return function(r)
       {
        var x;
        if(r.$==0)
         {
          x=r.$0;
          return(f(out))(x);
         }
        else
         {
          return out.Trigger(Runtime.New(Result,{
           $:1,
           $0:r.$0
          }));
         }
       };
      },p);
     },
     Render:function(view,p)
     {
      return p.view.call(null,view);
     },
     Return:function(x)
     {
      return Runtime.New(Piglet1,{
       stream:Stream1.New(Runtime.New(Result,{
        $:0,
        $0:x
       }),{
        $:0
       }),
       view:function(x1)
       {
        return x1;
       }
      });
     },
     ReturnFailure:function()
     {
      return Runtime.New(Piglet1,{
       stream:Stream1.New(Runtime.New(Result,{
        $:1,
        $0:Runtime.New(T,{
         $:0
        })
       }),{
        $:0
       }),
       view:function(x)
       {
        return x;
       }
      });
     },
     Run:function(action,p)
     {
      return Piglet.RunResult(Result.Iter(action),p);
     },
     RunResult:function(action,p)
     {
      p.stream.Subscribe(action);
      return p;
     },
     TransmitReader:function(p)
     {
      var v,a;
      v=p.view;
      a=p.stream;
      return Runtime.New(Piglet1,{
       stream:p.stream,
       view:function(x)
       {
        return(v(x))(a);
       }
      });
     },
     TransmitReaderMap:function(f,p)
     {
      var v,a;
      v=p.view;
      a=Reader.Map(f,p.stream);
      return Runtime.New(Piglet1,{
       stream:p.stream,
       view:function(x)
       {
        return(v(x))(a);
       }
      });
     },
     TransmitReaderMapResult:function(f,p)
     {
      var v,a;
      v=p.view;
      a=Reader.MapResult(f,p.stream);
      return Runtime.New(Piglet1,{
       stream:p.stream,
       view:function(x)
       {
        return(v(x))(a);
       }
      });
     },
     TransmitReaderMapToResult:function(f,p)
     {
      var v,a;
      v=p.view;
      a=Reader.MapToResult(f,p.stream);
      return Runtime.New(Piglet1,{
       stream:p.stream,
       view:function(x)
       {
        return(v(x))(a);
       }
      });
     },
     TransmitStream:function(p)
     {
      var v,a;
      v=p.view;
      a=p.stream;
      return Runtime.New(Piglet1,{
       stream:p.stream,
       view:function(x)
       {
        return(v(x))(a);
       }
      });
     },
     TransmitWriter:function(p)
     {
      var v,a;
      v=p.view;
      a=p.stream;
      return Runtime.New(Piglet1,{
       stream:p.stream,
       view:function(x)
       {
        return(v(x))(a);
       }
      });
     },
     Validation:{
      Is:function(pred,msg,p)
      {
       var _s_;
       _s_=Stream1.New(p.stream.get_Latest(),{
        $:1,
        $0:p.stream.get_Id()
       });
       p.stream.Subscribe(function(_arg1)
       {
        return _arg1.$==0?pred(_arg1.$0)?_s_.Trigger(Runtime.New(Result,{
         $:0,
         $0:_arg1.$0
        })):_s_.Trigger(Runtime.New(Result,{
         $:1,
         $0:List.ofArray([ErrorMessage.New(msg,_s_.get_Id())])
        })):_s_.Trigger(Runtime.New(Result,{
         $:1,
         $0:_arg1.$0
        }));
       });
       return Runtime.New(Piglet1,{
        stream:_s_,
        view:p.view
       });
      },
      "Is'":function(pred,msg,p)
      {
       var _s_;
       _s_=Stream1.New(p.stream.get_Latest(),{
        $:1,
        $0:p.stream.get_Id()
       });
       p.stream.Subscribe(function(_arg1)
       {
        return _arg1.$==0?pred(_arg1.$0)?_s_.Trigger(Runtime.New(Result,{
         $:0,
         $0:_arg1.$0
        })):_s_.Trigger(Runtime.New(Result,{
         $:1,
         $0:List.ofArray([msg])
        })):_s_.Trigger(Runtime.New(Result,{
         $:1,
         $0:_arg1.$0
        }));
       });
       return Runtime.New(Piglet1,{
        stream:_s_,
        view:p.view
       });
      },
      Match:function(re)
      {
       var objectArg;
       objectArg=new RegExp(re);
       return function(arg00)
       {
        return objectArg.test(arg00);
       };
      },
      NotEmpty:function(x)
      {
       return x!=="";
      }
     },
     WithSubmit:function(pin)
     {
      var submitter,v;
      submitter=Submitter.New(pin.stream,false);
      v=pin.view;
      return Runtime.New(Piglet1,{
       stream:submitter.get_Output(),
       view:function(x)
       {
        return(v(x))(submitter);
       }
      });
     },
     WithSubmitClearError:function(pin)
     {
      var submitter,v;
      submitter=Submitter.New(pin.stream,true);
      v=pin.view;
      return Runtime.New(Piglet1,{
       stream:submitter.get_Output(),
       view:function(x)
       {
        return(v(x))(submitter);
       }
      });
     },
     Yield:function(x)
     {
      var s;
      s=Stream1.New(Runtime.New(Result,{
       $:0,
       $0:x
      }),{
       $:0
      });
      return Runtime.New(Piglet1,{
       stream:s,
       view:function(f)
       {
        return f(s);
       }
      });
     },
     YieldFailure:function()
     {
      var s;
      s=Stream1.New(Runtime.New(Result,{
       $:1,
       $0:Runtime.New(T,{
        $:0
       })
      }),{
       $:0
      });
      return Runtime.New(Piglet1,{
       stream:s,
       view:function(f)
       {
        return f(s);
       }
      });
     },
     YieldOption:function(x,none)
     {
      var _arg00_,_arg10_;
      _arg00_=function(_arg1)
      {
       return _arg1.$==1?_arg1.$0:none;
      };
      _arg10_=function(x1)
      {
       return Unchecked.Equals(x1,none)?{
        $:0
       }:{
        $:1,
        $0:x1
       };
      };
      return Piglet.MapViewArgs(function(_arg20_)
      {
       return Stream3.Map(_arg00_,_arg10_,_arg20_);
      },Piglet.Yield(x));
     }
    },
    Piglet1:Runtime.Class({
     get_Stream:function()
     {
      return this.stream;
     }
    }),
    Reader:Runtime.Class({
     SubscribeImmediate:function(f)
     {
      f(this.get_Latest());
      return this.Subscribe(f);
     },
     Through:function(r)
     {
      var out,_this=this;
      out=Stream1.New(this.get_Latest(),{
       $:0
      });
      r.Subscribe(function(_arg1)
      {
       var msgs,matchValue,_l_,l;
       if(_arg1.$==1)
        {
         msgs=_arg1.$0;
         matchValue=[_this.get_Latest(),List.filter(function(m)
         {
          return m.get_Source()===_this.get_Id();
         },msgs)];
         if(matchValue[1].$==0)
          {
           return out.Trigger(_this.get_Latest());
          }
         else
          {
           if(matchValue[0].$==1)
            {
             _l_=matchValue[1];
             l=matchValue[0].$0;
             return out.Trigger(Runtime.New(Result,{
              $:1,
              $0:List.append(l,_l_)
             }));
            }
           else
            {
             return out.Trigger(Runtime.New(Result,{
              $:1,
              $0:matchValue[1]
             }));
            }
          }
        }
       else
        {
         return out.Trigger(_this.get_Latest());
        }
      });
      return out;
     },
     get_Id:function()
     {
      return this.id;
     }
    },{
     Const:function(x)
     {
      return ConstReader.New(Runtime.New(Result,{
       $:0,
       $0:x
      }));
     },
     ConstResult:function(x)
     {
      return ConstReader.New(x);
     },
     Map:function(f,r)
     {
      return Reader.MapResult(function(arg10)
      {
       return Result.Map(f,arg10);
      },r);
     },
     Map2:function(f,rb,rc)
     {
      return Reader.MapResult2(function(b)
      {
       return function(c)
       {
        return Result.Map2(f,b,c);
       };
      },rb,rc);
     },
     MapResult:function(f,r)
     {
      var out;
      out=Stream1.New(f(r.get_Latest()),{
       $:0
      });
      r.Subscribe(function(x)
      {
       return out.Trigger(f(x));
      });
      return out;
     },
     MapResult2:function(f,rb,rc)
     {
      var out;
      out=Stream1.New((f(rb.get_Latest()))(rc.get_Latest()),{
       $:0
      });
      rb.Subscribe(function(b)
      {
       return out.Trigger((f(b))(rc.get_Latest()));
      });
      rc.Subscribe(function(c)
      {
       return out.Trigger((f(rb.get_Latest()))(c));
      });
      return out;
     },
     MapToResult:function(f,r)
     {
      return Reader.MapResult(Result.Bind(f),r);
     },
     New:function(id)
     {
      var r;
      r=Runtime.New(this,{});
      r.id=id;
      return r;
     }
    }),
    Result:Runtime.Class({
     get_isSuccess:function()
     {
      return this.$==1?false:true;
     }
    },{
     Ap:function(r1,r2)
     {
      var matchValue,m1,m2;
      matchValue=[r1,r2];
      if(matchValue[0].$==1)
       {
        if(matchValue[1].$==1)
         {
          m1=matchValue[0].$0;
          m2=matchValue[1].$0;
          return Runtime.New(Result,{
           $:1,
           $0:List.append(m1,m2)
          });
         }
        else
         {
          return Runtime.New(Result,{
           $:1,
           $0:matchValue[0].$0
          });
         }
       }
      else
       {
        return matchValue[1].$==1?Runtime.New(Result,{
         $:1,
         $0:matchValue[1].$0
        }):Runtime.New(Result,{
         $:0,
         $0:matchValue[0].$0.call(null,matchValue[1].$0)
        });
       }
     },
     Bind:function(f)
     {
      return function(_arg2)
      {
       return _arg2.$==1?Runtime.New(Result,{
        $:1,
        $0:_arg2.$0
       }):f(_arg2.$0);
      };
     },
     Failwith:function(msg)
     {
      return Runtime.New(Result,{
       $:1,
       $0:List.ofArray([ErrorMessage.New(msg,0)])
      });
     },
     Iter:function(f)
     {
      return function(_arg1)
      {
       return _arg1.$==1?null:f(_arg1.$0);
      };
     },
     Join:function(r)
     {
      return r.$==0?r.$0.$==0?Runtime.New(Result,{
       $:0,
       $0:r.$0.$0
      }):Runtime.New(Result,{
       $:1,
       $0:r.$0.$0
      }):Runtime.New(Result,{
       $:1,
       $0:r.$0
      });
     },
     Map:function(f,ra)
     {
      return ra.$==1?Runtime.New(Result,{
       $:1,
       $0:ra.$0
      }):Runtime.New(Result,{
       $:0,
       $0:f(ra.$0)
      });
     },
     Map2:function(f,ra,rb)
     {
      var matchValue,ma,mb,b;
      matchValue=[ra,rb];
      if(matchValue[0].$==1)
       {
        if(matchValue[1].$==1)
         {
          ma=matchValue[0].$0;
          mb=matchValue[1].$0;
          return Runtime.New(Result,{
           $:1,
           $0:List.append(ma,mb)
          });
         }
        else
         {
          return Runtime.New(Result,{
           $:1,
           $0:matchValue[0].$0
          });
         }
       }
      else
       {
        if(matchValue[1].$==1)
         {
          return Runtime.New(Result,{
           $:1,
           $0:matchValue[1].$0
          });
         }
        else
         {
          b=matchValue[1].$0;
          return Runtime.New(Result,{
           $:0,
           $0:(f(matchValue[0].$0))(b)
          });
         }
       }
     }
    }),
    Stream:{
     Ap:function(sf,sx)
     {
      var out;
      out=Stream1.New(Result.Ap(sf.get_Latest(),sx.get_Latest()),{
       $:0
      });
      sf.Subscribe(function(f)
      {
       return out.Trigger(Result.Ap(f,sx.get_Latest()));
      });
      sx.Subscribe(function(x)
      {
       return out.Trigger(Result.Ap(sf.get_Latest(),x));
      });
      return out;
     },
     ApJoin:function(sf,sx)
     {
      var out;
      out=Stream1.New(Result.Ap(sf.get_Latest(),Result.Join(sx.get_Latest())),{
       $:0
      });
      sf.Subscribe(function(f)
      {
       return out.Trigger(Result.Ap(f,Result.Join(sx.get_Latest())));
      });
      sx.Subscribe(function(x)
      {
       return out.Trigger(Result.Ap(sf.get_Latest(),Result.Join(x)));
      });
      return out;
     },
     Map:function(a2b,b2a,s)
     {
      var _s_,pa,pb;
      _s_=Stream1.New(Result.Map(a2b,s.get_Latest()),{
       $:1,
       $0:s.get_Id()
      });
      pa={
       contents:s.get_Latest()
      };
      pb={
       contents:_s_.get_Latest()
      };
      s.Subscribe(function(a)
      {
       if(pa.contents!==a)
        {
         pb.contents=Result.Map(a2b,a);
         return _s_.Trigger(pb.contents);
        }
       else
        {
         return null;
        }
      });
      _s_.Subscribe(function(b)
      {
       if(pb.contents!==b)
        {
         pa.contents=Result.Map(b2a,b);
         return s.Trigger(pa.contents);
        }
       else
        {
         return null;
        }
      });
      return _s_;
     }
    },
    Stream1:Runtime.Class({
     Subscribe:function(f)
     {
      return Util.subscribeTo(this.s,f);
     },
     Trigger:function(x)
     {
      return this.s.Trigger(x);
     },
     Trigger1:function(x)
     {
      return this.Trigger(x);
     },
     Write:function(x)
     {
      var _this=this;
      return ConcreteWriter.New(function(_arg1)
      {
       return _arg1.$==0?_this.Trigger(Runtime.New(Result,{
        $:0,
        $0:x
       })):_this.Trigger(Runtime.New(Result,{
        $:1,
        $0:_arg1.$0
       }));
      });
     },
     get_Latest:function()
     {
      return this.s.Latest.contents.$0;
     }
    },{
     New:function(init,id)
     {
      return Runtime.New(this,Stream1.New1(HotStream.New(init),id));
     },
     New1:function(s,id)
     {
      var r;
      r=Runtime.New(this,Reader.New(id.$==0?(Id.next())(null):id.$0));
      r.s=s;
      return r;
     }
    }),
    Submitter:Runtime.Class({
     Subscribe:function(f)
     {
      return this.output.Subscribe(f);
     },
     Trigger:function()
     {
      return this.writer.Trigger(Runtime.New(Result,{
       $:0,
       $0:null
      }));
     },
     Trigger1:function(x)
     {
      return this.writer.Trigger(x);
     },
     get_Input:function()
     {
      return this.input;
     },
     get_Latest:function()
     {
      return this.output.get_Latest();
     },
     get_Output:function()
     {
      return this.output;
     }
    },{
     New:function(input,clearError)
     {
      var r;
      r=Runtime.New(this,Reader.New((Id.next())(null)));
      r.input=input;
      r.output=Stream1.New(Runtime.New(Result,{
       $:1,
       $0:Runtime.New(T,{
        $:0
       })
      }),{
       $:0
      });
      r.writer=ConcreteWriter.New(function(unitIn)
      {
       var matchValue,m1,m2;
       matchValue=[unitIn,r.input.get_Latest()];
       if(matchValue[0].$==0)
        {
         return matchValue[1].$==0?r.output.Trigger(Runtime.New(Result,{
          $:0,
          $0:matchValue[1].$0
         })):r.output.Trigger(Runtime.New(Result,{
          $:1,
          $0:matchValue[1].$0
         }));
        }
       else
        {
         if(matchValue[1].$==0)
          {
           return r.output.Trigger(Runtime.New(Result,{
            $:1,
            $0:matchValue[0].$0
           }));
          }
         else
          {
           m1=matchValue[0].$0;
           m2=matchValue[1].$0;
           return r.output.Trigger(Runtime.New(Result,{
            $:1,
            $0:List.append(m1,m2)
           }));
          }
        }
      });
      if(clearError)
       {
        r.input.Subscribe(function()
        {
         var matchValue;
         matchValue=r.output.get_Latest();
         return matchValue.$==1?matchValue.$0.$==0?null:r.output.Trigger(Runtime.New(Result,{
          $:1,
          $0:Runtime.New(T,{
           $:0
          })
         })):r.output.Trigger(Runtime.New(Result,{
          $:1,
          $0:Runtime.New(T,{
           $:0
          })
         }));
        });
       }
      return r;
     }
    })
   }
  }
 });
 Runtime.OnInit(function()
 {
  Piglets=Runtime.Safe(Global.WebSharper.Piglets);
  Choose=Runtime.Safe(Piglets.Choose);
  Stream=Runtime.Safe(Choose.Stream);
  Reader=Runtime.Safe(Piglets.Reader);
  Collections=Runtime.Safe(Global.WebSharper.Collections);
  Dictionary=Runtime.Safe(Collections.Dictionary);
  List=Runtime.Safe(Global.WebSharper.List);
  T=Runtime.Safe(List.T);
  Enumerator=Runtime.Safe(Global.WebSharper.Enumerator);
  Seq=Runtime.Safe(Global.WebSharper.Seq);
  Operators=Runtime.Safe(Global.WebSharper.Operators);
  Stream1=Runtime.Safe(Piglets.Stream1);
  Result=Runtime.Safe(Piglets.Result);
  ConcreteReader=Runtime.Safe(Piglets.ConcreteReader);
  Id=Runtime.Safe(Piglets.Id);
  ConcreteWriter=Runtime.Safe(Piglets.ConcreteWriter);
  ConstReader=Runtime.Safe(Piglets.ConstReader);
  Disposable=Runtime.Safe(Piglets.Disposable);
  Html=Runtime.Safe(Global.WebSharper.Html);
  Client=Runtime.Safe(Html.Client);
  Operators1=Runtime.Safe(Client.Operators);
  Tags=Runtime.Safe(Client.Tags);
  EventsPervasives=Runtime.Safe(Client.EventsPervasives);
  Controls=Runtime.Safe(Piglets.Controls);
  Attr=Runtime.Safe(Client.Attr);
  Unchecked=Runtime.Safe(Global.WebSharper.Unchecked);
  jQuery=Runtime.Safe(Global.jQuery);
  HtmlContainer=Runtime.Safe(Controls.HtmlContainer);
  Arrays=Runtime.Safe(Global.WebSharper.Arrays);
  ErrorMessage=Runtime.Safe(Piglets.ErrorMessage);
  Many=Runtime.Safe(Piglets.Many);
  Stream2=Runtime.Safe(Many.Stream);
  Submitter=Runtime.Safe(Piglets.Submitter);
  Operations=Runtime.Safe(Many.Operations);
  ResizeArray=Runtime.Safe(Collections.ResizeArray);
  ResizeArrayProxy=Runtime.Safe(ResizeArray.ResizeArrayProxy);
  UnitStream=Runtime.Safe(Many.UnitStream);
  Pervasives=Runtime.Safe(Piglets.Pervasives);
  Concurrency=Runtime.Safe(Global.WebSharper.Concurrency);
  Piglet1=Runtime.Safe(Piglets.Piglet1);
  Stream3=Runtime.Safe(Piglets.Stream);
  Piglet=Runtime.Safe(Piglets.Piglet);
  Validation=Runtime.Safe(Piglet.Validation);
  RegExp=Runtime.Safe(Global.RegExp);
  Util=Runtime.Safe(Global.WebSharper.Util);
  IntelliFactory=Runtime.Safe(Global.IntelliFactory);
  Reactive=Runtime.Safe(IntelliFactory.Reactive);
  return HotStream=Runtime.Safe(Reactive.HotStream);
 });
 Runtime.OnLoad(function()
 {
  Runtime.Inherit(Stream,Reader);
  Runtime.Inherit(ConcreteReader,Reader);
  Runtime.Inherit(ConstReader,Reader);
  Runtime.Inherit(Stream2,Reader);
  Runtime.Inherit(Stream2,Reader);
  Runtime.Inherit(UnitStream,Stream2);
  Runtime.Inherit(Stream1,Reader);
  Runtime.Inherit(Submitter,Reader);
  Id.next();
  Controls.nextId();
  return;
 });
}());
