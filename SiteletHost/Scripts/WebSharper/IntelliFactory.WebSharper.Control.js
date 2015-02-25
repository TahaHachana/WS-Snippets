(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,WebSharper,Option,Seq,Unchecked,Control,Disposable,IntrinsicFunctionProxy,FSharpEvent,Util,Event,Event1,Collections,ResizeArray,ResizeArrayProxy,EventModule,HotStream,HotStream1,Concurrency,Operators,Error,setTimeout,clearTimeout,LinkedList,ListProxy,MailboxProcessor,Observable,Observer,Observable1,List,T,Observer1;
 Runtime.Define(Global,{
  IntelliFactory:{
   WebSharper:{
    Control:{
     Disposable:{
      Of:function(dispose)
      {
       return{
        Dispose:dispose
       };
      }
     },
     Event:{
      Event:Runtime.Class({
       AddHandler:function(h)
       {
        return this.Handlers.Add(h);
       },
       RemoveHandler:function(h)
       {
        var objectArg;
        objectArg=this.Handlers;
        return Option.iter(function(arg00)
        {
         return objectArg.RemoveAt(arg00);
        },Seq.tryFindIndex(function(y)
        {
         return Unchecked.Equals(h,y);
        },this.Handlers));
       },
       Subscribe:function(observer)
       {
        var h,_this=this;
        h=function(x)
        {
         return observer.OnNext(x);
        };
        this.AddHandler(h);
        return Disposable.Of(function()
        {
         return _this.RemoveHandler(h);
        });
       },
       Trigger:function(x)
       {
        var arr,idx;
        arr=this.Handlers.ToArray();
        for(idx=0;idx<=arr.length-1;idx++){
         (IntrinsicFunctionProxy.GetArray(arr,idx))(x);
        }
        return;
       }
      })
     },
     EventModule:{
      Choose:function(c,e)
      {
       var r;
       r=FSharpEvent.New();
       Util.addListener(e,function(x)
       {
        var matchValue;
        matchValue=c(x);
        return matchValue.$==0?null:r.event.Trigger(matchValue.$0);
       });
       return r.event;
      },
      Filter:function(ok,e)
      {
       var r;
       r=Runtime.New(Event1,{
        Handlers:ResizeArrayProxy.New1()
       });
       Util.addListener(e,function(x)
       {
        return ok(x)?r.Trigger(x):null;
       });
       return r;
      },
      Map:function(f,e)
      {
       var r;
       r=Runtime.New(Event1,{
        Handlers:ResizeArrayProxy.New1()
       });
       Util.addListener(e,function(x)
       {
        return r.Trigger(f(x));
       });
       return r;
      },
      Merge:function(e1,e2)
      {
       var r;
       r=Runtime.New(Event1,{
        Handlers:ResizeArrayProxy.New1()
       });
       Util.addListener(e1,function(arg00)
       {
        return r.Trigger(arg00);
       });
       Util.addListener(e2,function(arg00)
       {
        return r.Trigger(arg00);
       });
       return r;
      },
      Pairwise:function(e)
      {
       var buf,ev;
       buf={
        contents:{
         $:0
        }
       };
       ev=Runtime.New(Event1,{
        Handlers:ResizeArrayProxy.New1()
       });
       Util.addListener(e,function(x)
       {
        var matchValue,old;
        matchValue=buf.contents;
        if(matchValue.$==1)
         {
          old=matchValue.$0;
          buf.contents={
           $:1,
           $0:x
          };
          return ev.Trigger([old,x]);
         }
        else
         {
          buf.contents={
           $:1,
           $0:x
          };
          return;
         }
       });
       return ev;
      },
      Partition:function(f,e)
      {
       return[EventModule.Filter(f,e),EventModule.Filter(function(x)
       {
        return!f(x);
       },e)];
      },
      Scan:function(fold,seed,e)
      {
       var state;
       state={
        contents:seed
       };
       return EventModule.Map(function(value)
       {
        state.contents=(fold(state.contents))(value);
        return state.contents;
       },e);
      },
      Split:function(f,e)
      {
       return[EventModule.Choose(function(x)
       {
        var matchValue;
        matchValue=f(x);
        return matchValue.$==0?{
         $:1,
         $0:matchValue.$0
        }:{
         $:0
        };
       },e),EventModule.Choose(function(x)
       {
        var matchValue;
        matchValue=f(x);
        return matchValue.$==1?{
         $:1,
         $0:matchValue.$0
        }:{
         $:0
        };
       },e)];
      }
     },
     FSharpEvent:Runtime.Class({},{
      New:function()
      {
       var r;
       r=Runtime.New(this,{});
       r.event=Runtime.New(Event1,{
        Handlers:ResizeArrayProxy.New1()
       });
       return r;
      }
     }),
     HotStream:{
      HotStream:Runtime.Class({
       Subscribe:function(o)
       {
        if(this.Latest.contents.$==1)
         {
          o.OnNext(this.Latest.contents.$0);
         }
        return Util.subscribeTo(this.Event.event,function(v)
        {
         return o.OnNext(v);
        });
       },
       Trigger:function(v)
       {
        this.Latest.contents={
         $:1,
         $0:v
        };
        return this.Event.event.Trigger(v);
       }
      },{
       New:function()
       {
        return Runtime.New(HotStream1,{
         Latest:{
          contents:{
           $:0
          }
         },
         Event:FSharpEvent.New()
        });
       }
      })
     },
     MailboxProcessor:Runtime.Class({
      PostAndAsyncReply:function(msgf,timeout)
      {
       var _this=this;
       return Concurrency.Delay(function()
       {
        return Concurrency.Bind(_this.PostAndTryAsyncReply(msgf,timeout),function(_arg4)
        {
         return Concurrency.Return(_arg4.$==1?_arg4.$0:Operators.Raise(new Error("TimeoutException")));
        });
       });
      },
      PostAndTryAsyncReply:function(msgf,timeout)
      {
       var timeout1,_this=this;
       timeout1=Operators.DefaultArg(timeout,this.get_DefaultTimeout());
       return Concurrency.FromContinuations(Runtime.Tupled(function(tupledArg)
       {
        var ok,_arg3,_arg4,waiting;
        ok=tupledArg[0];
        _arg3=tupledArg[1];
        _arg4=tupledArg[2];
        if(timeout1<0)
         {
          _this.mailbox.AddLast(msgf(function(x)
          {
           return ok({
            $:1,
            $0:x
           });
          }));
          return _this.resume();
         }
        else
         {
          waiting={
           contents:true
          };
          _this.mailbox.AddLast(msgf(function(res)
          {
           if(waiting.contents)
            {
             waiting.contents=false;
             return ok({
              $:1,
              $0:res
             });
            }
           else
            {
             return null;
            }
          }));
          _this.resume();
          setTimeout(function()
          {
           if(waiting.contents)
            {
             waiting.contents=false;
             return ok({
              $:0
             });
            }
           else
            {
             return null;
            }
          },timeout1);
          return;
         }
       }));
      },
      Receive:function(timeout)
      {
       var _this=this;
       return Concurrency.Delay(function()
       {
        return Concurrency.Bind(_this.TryReceive(timeout),function(_arg3)
        {
         return Concurrency.Return(_arg3.$==1?_arg3.$0:Operators.Raise(new Error("TimeoutException")));
        });
       });
      },
      Scan:function(scanner,timeout)
      {
       var _this=this;
       return Concurrency.Delay(function()
       {
        return Concurrency.Bind(_this.TryScan(scanner,timeout),function(_arg8)
        {
         return Concurrency.Return(_arg8.$==1?_arg8.$0:Operators.Raise(new Error("TimeoutException")));
        });
       });
      },
      Start:function()
      {
       var _this=this;
       if(this.started)
        {
         return Operators.FailWith("The MailboxProcessor has already been started.");
        }
       else
        {
         this.started=true;
         return this.startAsync(Concurrency.Delay(function()
         {
          return Concurrency.TryWith(Concurrency.Delay(function()
          {
           return Concurrency.Bind(_this.initial.call(null,_this),function()
           {
            return Concurrency.Return(null);
           });
          }),function(_arg2)
          {
           _this.errorEvent.event.Trigger(_arg2);
           return Concurrency.Return(null);
          });
         }));
        }
      },
      TryReceive:function(timeout)
      {
       var timeout1,_this=this;
       timeout1=Operators.DefaultArg(timeout,this.get_DefaultTimeout());
       return Concurrency.FromContinuations(Runtime.Tupled(function(tupledArg)
       {
        var ok,_arg1,_arg2,waiting,pending;
        ok=tupledArg[0];
        _arg1=tupledArg[1];
        _arg2=tupledArg[2];
        if(Unchecked.Equals(_this.mailbox.get_First(),null))
         {
          if(timeout1<0)
           {
            _this.savedCont={
             $:1,
             $0:Concurrency.Delay(function()
             {
              ok({
               $:1,
               $0:_this.dequeue()
              });
              return Concurrency.Return(null);
             })
            };
            return;
           }
          else
           {
            waiting={
             contents:true
            };
            pending=setTimeout(function()
            {
             if(waiting.contents)
              {
               waiting.contents=false;
               _this.savedCont={
                $:0
               };
               return ok({
                $:0
               });
              }
             else
              {
               return null;
              }
            },timeout1);
            _this.savedCont={
             $:1,
             $0:Concurrency.Delay(function()
             {
              if(waiting.contents)
               {
                waiting.contents=false;
                clearTimeout(pending);
                ok({
                 $:1,
                 $0:_this.dequeue()
                });
                return Concurrency.Return(null);
               }
              else
               {
                return Concurrency.Return(null);
               }
             })
            };
            return;
           }
         }
        else
         {
          return ok({
           $:1,
           $0:_this.dequeue()
          });
         }
       }));
      },
      TryScan:function(scanner,timeout)
      {
       var timeout1,_this=this;
       timeout1=Operators.DefaultArg(timeout,this.get_DefaultTimeout());
       return Concurrency.Delay(function()
       {
        var m,found,matchValue,matchValue1;
        m=_this.mailbox.get_First();
        found={
         $:0
        };
        while(!Unchecked.Equals(m,null))
         {
          matchValue1=scanner(m.v);
          if(matchValue1.$==0)
           {
            m=m.n;
           }
          else
           {
            _this.mailbox.Remove(m);
            m=null;
            found=matchValue1;
           }
         }
        matchValue=found;
        return matchValue.$==1?Concurrency.Bind(matchValue.$0,function(_arg5)
        {
         return Concurrency.Return({
          $:1,
          $0:_arg5
         });
        }):Concurrency.FromContinuations(Runtime.Tupled(function(tupledArg)
        {
         var ok,_arg5,_arg6,scanNext,waiting,pending,scanNext1;
         ok=tupledArg[0];
         _arg5=tupledArg[1];
         _arg6=tupledArg[2];
         if(timeout1<0)
          {
           scanNext=function()
           {
            _this.savedCont={
             $:1,
             $0:Concurrency.Delay(function()
             {
              var matchValue2,c;
              matchValue2=scanner(_this.mailbox.get_First().v);
              if(matchValue2.$==1)
               {
                c=matchValue2.$0;
                _this.mailbox.RemoveFirst();
                return Concurrency.Bind(c,function(_arg61)
                {
                 ok({
                  $:1,
                  $0:_arg61
                 });
                 return Concurrency.Return(null);
                });
               }
              else
               {
                scanNext(null);
                return Concurrency.Return(null);
               }
             })
            };
            return;
           };
           return scanNext(null);
          }
         else
          {
           waiting={
            contents:true
           };
           pending=setTimeout(function()
           {
            if(waiting.contents)
             {
              waiting.contents=false;
              _this.savedCont={
               $:0
              };
              return ok({
               $:0
              });
             }
            else
             {
              return null;
             }
           },timeout1);
           scanNext1=function()
           {
            _this.savedCont={
             $:1,
             $0:Concurrency.Delay(function()
             {
              var matchValue2,c;
              matchValue2=scanner(_this.mailbox.get_First().v);
              if(matchValue2.$==1)
               {
                c=matchValue2.$0;
                _this.mailbox.RemoveFirst();
                return Concurrency.Bind(c,function(_arg7)
                {
                 if(waiting.contents)
                  {
                   waiting.contents=false;
                   clearTimeout(pending);
                   ok({
                    $:1,
                    $0:_arg7
                   });
                   return Concurrency.Return(null);
                  }
                 else
                  {
                   return Concurrency.Return(null);
                  }
                });
               }
              else
               {
                scanNext1(null);
                return Concurrency.Return(null);
               }
             })
            };
            return;
           };
           return scanNext1(null);
          }
        }));
       });
      },
      dequeue:function()
      {
       var f;
       f=this.mailbox.get_First().v;
       this.mailbox.RemoveFirst();
       return f;
      },
      get_CurrentQueueLength:function()
      {
       return this.mailbox.get_Count();
      },
      get_DefaultTimeout:function()
      {
       return this["DefaultTimeout@"];
      },
      get_Error:function()
      {
       return this.errorEvent.event;
      },
      resume:function()
      {
       var matchValue,c;
       matchValue=this.savedCont;
       if(matchValue.$==1)
        {
         c=matchValue.$0;
         this.savedCont={
          $:0
         };
         return this.startAsync(c);
        }
       else
        {
         return null;
        }
      },
      set_DefaultTimeout:function(v)
      {
       this["DefaultTimeout@"]=v;
       return;
      },
      startAsync:function(a)
      {
       return Concurrency.Start(a,this.token);
      }
     },{
      New:function(initial,token)
      {
       var r,matchValue;
       r=Runtime.New(this,{});
       r.initial=initial;
       r.token=token;
       r.started=false;
       r.errorEvent=FSharpEvent.New();
       r.mailbox=ListProxy.New();
       r.savedCont={
        $:0
       };
       matchValue=r.token;
       if(matchValue.$==0)
        {
        }
       else
        {
         Concurrency.Register(matchValue.$0,function()
         {
          return function()
          {
           return r.resume();
          }();
         });
        }
       r["DefaultTimeout@"]=-1;
       return r;
      },
      Start:function(initial,token)
      {
       var mb;
       mb=MailboxProcessor.New(initial,token);
       mb.Start();
       return mb;
      }
     }),
     Observable:{
      Aggregate:function(io,seed,fold)
      {
       return Observable.New(function(o1)
       {
        var state;
        state={
         contents:seed
        };
        return io.Subscribe(Observer.New(function(v)
        {
         return Observable.Protect(function()
         {
          return(fold(state.contents))(v);
         },function(s)
         {
          state.contents=s;
          return o1.OnNext(s);
         },function(arg00)
         {
          return o1.OnError(arg00);
         });
        },function(arg00)
        {
         return o1.OnError(arg00);
        },function()
        {
         return o1.OnCompleted();
        }));
       });
      },
      Choose:function(f,io)
      {
       return Observable.New(function(o1)
       {
        return io.Subscribe(Observer.New(function(v)
        {
         var action;
         action=function(arg00)
         {
          return o1.OnNext(arg00);
         };
         return Observable.Protect(function()
         {
          return f(v);
         },function(option)
         {
          return Option.iter(action,option);
         },function(arg00)
         {
          return o1.OnError(arg00);
         });
        },function(arg00)
        {
         return o1.OnError(arg00);
        },function()
        {
         return o1.OnCompleted();
        }));
       });
      },
      CombineLatest:function(io1,io2,f)
      {
       return Observable.New(function(o)
       {
        var lv1,lv2,update,o1,o2,d1,d2;
        lv1={
         contents:{
          $:0
         }
        };
        lv2={
         contents:{
          $:0
         }
        };
        update=function()
        {
         var matchValue,v1,v2;
         matchValue=[lv1.contents,lv2.contents];
         if(matchValue[0].$==1)
          {
           if(matchValue[1].$==1)
            {
             v1=matchValue[0].$0;
             v2=matchValue[1].$0;
             return Observable.Protect(function()
             {
              return(f(v1))(v2);
             },function(arg00)
             {
              return o.OnNext(arg00);
             },function(arg00)
             {
              return o.OnError(arg00);
             });
            }
           else
            {
             return null;
            }
          }
         else
          {
           return null;
          }
        };
        o1=Observer.New(function(x)
        {
         lv1.contents={
          $:1,
          $0:x
         };
         return update(null);
        },function()
        {
        },function()
        {
        });
        o2=Observer.New(function(y)
        {
         lv2.contents={
          $:1,
          $0:y
         };
         return update(null);
        },function()
        {
        },function()
        {
        });
        d1=io1.Subscribe(o1);
        d2=io2.Subscribe(o2);
        return Disposable.Of(function()
        {
         d1.Dispose();
         return d2.Dispose();
        });
       });
      },
      Concat:function(io1,io2)
      {
       return Observable.New(function(o)
       {
        var innerDisp,outerDisp;
        innerDisp={
         contents:{
          $:0
         }
        };
        outerDisp=io1.Subscribe(Observer.New(function(arg00)
        {
         return o.OnNext(arg00);
        },function()
        {
        },function()
        {
         innerDisp.contents={
          $:1,
          $0:io2.Subscribe(o)
         };
        }));
        return Disposable.Of(function()
        {
         if(innerDisp.contents.$==1)
          {
           innerDisp.contents.$0.Dispose();
          }
         return outerDisp.Dispose();
        });
       });
      },
      Drop:function(count,io)
      {
       return Observable.New(function(o1)
       {
        var index;
        index={
         contents:0
        };
        return io.Subscribe(Observer.New(function(v)
        {
         Operators.Increment(index);
         return index.contents>count?o1.OnNext(v):null;
        },function(arg00)
        {
         return o1.OnError(arg00);
        },function()
        {
         return o1.OnCompleted();
        }));
       });
      },
      Filter:function(f,io)
      {
       return Observable.New(function(o1)
       {
        return io.Subscribe(Observer.New(function(v)
        {
         var action;
         action=function(arg00)
         {
          return o1.OnNext(arg00);
         };
         return Observable.Protect(function()
         {
          return f(v)?{
           $:1,
           $0:v
          }:{
           $:0
          };
         },function(option)
         {
          return Option.iter(action,option);
         },function(arg00)
         {
          return o1.OnError(arg00);
         });
        },function(arg00)
        {
         return o1.OnError(arg00);
        },function()
        {
         return o1.OnCompleted();
        }));
       });
      },
      Map:function(f,io)
      {
       return Observable.New(function(o1)
       {
        return io.Subscribe(Observer.New(function(v)
        {
         return Observable.Protect(function()
         {
          return f(v);
         },function(arg00)
         {
          return o1.OnNext(arg00);
         },function(arg00)
         {
          return o1.OnError(arg00);
         });
        },function(arg00)
        {
         return o1.OnError(arg00);
        },function()
        {
         return o1.OnCompleted();
        }));
       });
      },
      Merge:function(io1,io2)
      {
       return Observable.New(function(o)
       {
        var completed1,completed2,disp1,disp2;
        completed1={
         contents:false
        };
        completed2={
         contents:false
        };
        disp1=io1.Subscribe(Observer.New(function(arg00)
        {
         return o.OnNext(arg00);
        },function()
        {
        },function()
        {
         completed1.contents=true;
         return(completed1.contents?completed2.contents:false)?o.OnCompleted():null;
        }));
        disp2=io2.Subscribe(Observer.New(function(arg00)
        {
         return o.OnNext(arg00);
        },function()
        {
        },function()
        {
         completed2.contents=true;
         return(completed1.contents?completed2.contents:false)?o.OnCompleted():null;
        }));
        return Disposable.Of(function()
        {
         disp1.Dispose();
         return disp2.Dispose();
        });
       });
      },
      Never:function()
      {
       return Observable.New(function()
       {
        return Disposable.Of(function()
        {
        });
       });
      },
      New:function(f)
      {
       return Runtime.New(Observable1,{
        Subscribe1:f
       });
      },
      Observable:Runtime.Class({
       Subscribe:function(observer)
       {
        return this.Subscribe1.call(null,observer);
       }
      }),
      Of:function(f)
      {
       return Observable.New(function(o)
       {
        return Disposable.Of(f(function(x)
        {
         return o.OnNext(x);
        }));
       });
      },
      Protect:function(f,succeed,fail)
      {
       var matchValue,e;
       try
       {
        matchValue={
         $:0,
         $0:f(null)
        };
       }
       catch(e)
       {
        matchValue={
         $:1,
         $0:e
        };
       }
       return matchValue.$==1?fail(matchValue.$0):succeed(matchValue.$0);
      },
      Range:function(start,count)
      {
       return Observable.New(function(o)
       {
        var i;
        for(i=start;i<=start+count;i++){
         o.OnNext(i);
        }
        return Disposable.Of(function()
        {
        });
       });
      },
      Return:function(x)
      {
       return Observable.New(function(o)
       {
        o.OnNext(x);
        o.OnCompleted();
        return Disposable.Of(function()
        {
        });
       });
      },
      SelectMany:function(io)
      {
       return Observable.New(function(o)
       {
        var disp,d;
        disp={
         contents:function()
         {
         }
        };
        d=Util.subscribeTo(io,function(o1)
        {
         var d1;
         d1=Util.subscribeTo(o1,function(v)
         {
          return o.OnNext(v);
         });
         disp.contents=function()
         {
          disp.contents.call(null,null);
          return d1.Dispose();
         };
         return;
        });
        return Disposable.Of(function()
        {
         disp.contents.call(null,null);
         return d.Dispose();
        });
       });
      },
      Sequence:function(ios)
      {
       var sequence;
       sequence=function(ios1)
       {
        return ios1.$==1?Observable.CombineLatest(ios1.$0,sequence(ios1.$1),function(x)
        {
         return function(y)
         {
          return Runtime.New(T,{
           $:1,
           $0:x,
           $1:y
          });
         };
        }):Observable.Return(Runtime.New(T,{
         $:0
        }));
       };
       return sequence(List.ofSeq(ios));
      },
      Switch:function(io)
      {
       return Observable.New(function(o)
       {
        var index,disp;
        index={
         contents:0
        };
        disp={
         contents:{
          $:0
         }
        };
        return Util.subscribeTo(io,function(o1)
        {
         var currentIndex;
         Operators.Increment(index);
         if(disp.contents.$==1)
          {
           disp.contents.$0.Dispose();
          }
         currentIndex=index.contents;
         disp.contents={
          $:1,
          $0:Util.subscribeTo(o1,function(v)
          {
           return currentIndex===index.contents?o.OnNext(v):null;
          })
         };
         return;
        });
       });
      }
     },
     ObservableModule:{
      Pairwise:function(e)
      {
       return Observable.New(function(o1)
       {
        var last;
        last={
         contents:{
          $:0
         }
        };
        return e.Subscribe(Observer.New(function(v)
        {
         var matchValue;
         matchValue=last.contents;
         if(matchValue.$==1)
          {
           o1.OnNext([matchValue.$0,v]);
          }
         last.contents={
          $:1,
          $0:v
         };
         return;
        },function(arg00)
        {
         return o1.OnError(arg00);
        },function()
        {
         return o1.OnCompleted();
        }));
       });
      },
      Partition:function(f,e)
      {
       return[Observable.Filter(f,e),Observable.Filter(function(x)
       {
        return!f(x);
       },e)];
      },
      Scan:function(fold,seed,e)
      {
       return Observable.New(function(o1)
       {
        var state;
        state={
         contents:seed
        };
        return e.Subscribe(Observer.New(function(v)
        {
         return Observable.Protect(function()
         {
          return(fold(state.contents))(v);
         },function(s)
         {
          state.contents=s;
          return o1.OnNext(s);
         },function(arg00)
         {
          return o1.OnError(arg00);
         });
        },function(arg00)
        {
         return o1.OnError(arg00);
        },function()
        {
         return o1.OnCompleted();
        }));
       });
      },
      Split:function(f,e)
      {
       var chooser;
       chooser=function(x)
       {
        var matchValue;
        matchValue=f(x);
        return matchValue.$==1?{
         $:1,
         $0:matchValue.$0
        }:{
         $:0
        };
       };
       return[Observable.Choose(function(x)
       {
        var matchValue;
        matchValue=f(x);
        return matchValue.$==0?{
         $:1,
         $0:matchValue.$0
        }:{
         $:0
        };
       },e),Observable.Choose(chooser,e)];
      }
     },
     Observer:{
      New:function(f,e,c)
      {
       return Runtime.New(Observer1,{
        onNext:f,
        onError:e,
        onCompleted:c
       });
      },
      Observer:Runtime.Class({
       OnCompleted:function()
       {
        return this.onCompleted.call(null,null);
       },
       OnError:function(e)
       {
        return this.onError.call(null,e);
       },
       OnNext:function(x)
       {
        return this.onNext.call(null,x);
       }
      }),
      Of:function(f)
      {
       return Runtime.New(Observer1,{
        onNext:function(x)
        {
         return f(x);
        },
        onError:function(x)
        {
         return Operators.Raise(x);
        },
        onCompleted:function()
        {
         return null;
        }
       });
      }
     }
    }
   }
  }
 });
 Runtime.OnInit(function()
 {
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Option=Runtime.Safe(WebSharper.Option);
  Seq=Runtime.Safe(WebSharper.Seq);
  Unchecked=Runtime.Safe(WebSharper.Unchecked);
  Control=Runtime.Safe(WebSharper.Control);
  Disposable=Runtime.Safe(Control.Disposable);
  IntrinsicFunctionProxy=Runtime.Safe(WebSharper.IntrinsicFunctionProxy);
  FSharpEvent=Runtime.Safe(Control.FSharpEvent);
  Util=Runtime.Safe(WebSharper.Util);
  Event=Runtime.Safe(Control.Event);
  Event1=Runtime.Safe(Event.Event);
  Collections=Runtime.Safe(WebSharper.Collections);
  ResizeArray=Runtime.Safe(Collections.ResizeArray);
  ResizeArrayProxy=Runtime.Safe(ResizeArray.ResizeArrayProxy);
  EventModule=Runtime.Safe(Control.EventModule);
  HotStream=Runtime.Safe(Control.HotStream);
  HotStream1=Runtime.Safe(HotStream.HotStream);
  Concurrency=Runtime.Safe(WebSharper.Concurrency);
  Operators=Runtime.Safe(WebSharper.Operators);
  Error=Runtime.Safe(Global.Error);
  setTimeout=Runtime.Safe(Global.setTimeout);
  clearTimeout=Runtime.Safe(Global.clearTimeout);
  LinkedList=Runtime.Safe(Collections.LinkedList);
  ListProxy=Runtime.Safe(LinkedList.ListProxy);
  MailboxProcessor=Runtime.Safe(Control.MailboxProcessor);
  Observable=Runtime.Safe(Control.Observable);
  Observer=Runtime.Safe(Control.Observer);
  Observable1=Runtime.Safe(Observable.Observable);
  List=Runtime.Safe(WebSharper.List);
  T=Runtime.Safe(List.T);
  return Observer1=Runtime.Safe(Observer.Observer);
 });
 Runtime.OnLoad(function()
 {
  return;
 });
}());
