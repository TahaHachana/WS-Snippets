(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,Arrays,ok,Unchecked,console,Testing,Pervasives,TestBuilder,test,Random,Math,NaN1,Infinity1,List,String,Seq;
 Runtime.Define(Global,{
  WebSharper:{
   Testing:{
    Assert:{
     For:function(times,gen,attempt)
     {
      var _this,i,i1;
      _this=gen.Base;
      for(i=0;i<=Arrays.length(_this)-1;i++){
       attempt(Arrays.get(gen.Base,i));
      }
      for(i1=1;i1<=times;i1++){
       attempt(gen.Next.call(null,null));
      }
      return;
     },
     Raises:function(f)
     {
      var _,matchValue;
      try
      {
       f(null);
       _=ok(false,"Assert raises exception test failed.");
      }
      catch(matchValue)
      {
       _=ok(true,"Pass.");
      }
      return _;
     }
    },
    Pervasives:{
     Is:function(a,b)
     {
      var _,ps;
      if(!Unchecked.Equals(a,b))
       {
        ps=[a,b];
        if(console)
         {
          console.log.apply(console,["Equality test failed."].concat(ps));
         }
        _=ok(false,"Equality test failed.");
       }
      else
       {
        _=ok(true,"Pass.");
       }
      return _;
     },
     Isnt:function(a,b)
     {
      var _,ps;
      if(Unchecked.Equals(a,b))
       {
        ps=[a,b];
        if(console)
         {
          console.log.apply(console,["Inequality test failed."].concat(ps));
         }
        _=ok(false,"Inequality test failed.");
       }
      else
       {
        _=ok(true,"Pass.");
       }
      return _;
     },
     Test:function(name)
     {
      return TestBuilder.New(name);
     },
     TestBuilder:Runtime.Class({
      Delay:function(f)
      {
       return test(this.name,f);
      },
      Zero:function()
      {
       return null;
      }
     },{
      New:function(name)
      {
       var r;
       r=Runtime.New(this,{});
       r.name=name;
       return r;
      }
     })
    },
    Random:{
     ArrayOf:function(generator)
     {
      return{
       Base:[[]],
       Next:function()
       {
        var len;
        len=Random.Natural().Next.call(null,null)%100;
        return Arrays.init(len,function()
        {
         return generator.Next.call(null,null);
        });
       }
      };
     },
     Boolean:Runtime.Field(function()
     {
      return{
       Base:[true,false],
       Next:function()
       {
        return Random.StandardUniform().Next.call(null,null)>0.5;
       }
      };
     }),
     Const:function(x)
     {
      return{
       Base:[x],
       Next:function()
       {
        return x;
       }
      };
     },
     Exponential:function(lambda)
     {
      return{
       Base:[],
       Next:function()
       {
        var p;
        p=Random.StandardUniform().Next.call(null,null);
        return-Math.log(1-p)/lambda;
       }
      };
     },
     Float:Runtime.Field(function()
     {
      return{
       Base:[0],
       Next:function()
       {
        var sign;
        sign=Random.Boolean().Next.call(null,null)?1:-1;
        return sign*Random.Exponential(0.1).Next.call(null,null);
       }
      };
     }),
     FloatExhaustive:Runtime.Field(function()
     {
      return{
       Base:[0,NaN1,Infinity1,-Infinity1],
       Next:function()
       {
        return Random.Float().Next.call(null,null);
       }
      };
     }),
     FloatWithin:function(low,hi)
     {
      return{
       Base:[low,hi],
       Next:function()
       {
        return low+(hi-low)*Math.random();
       }
      };
     },
     Implies:function(a,b)
     {
      return!a?true:b;
     },
     Imply:function(a,b)
     {
      return Random.Implies(a,b);
     },
     Int:Runtime.Field(function()
     {
      return{
       Base:[0,1,-1],
       Next:function()
       {
        return Math.round(Random.Float().Next.call(null,null));
       }
      };
     }),
     ListOf:function(generator)
     {
      var f,gen;
      f=function(array)
      {
       return List.ofArray(array);
      };
      gen=Random.ArrayOf(generator);
      return Random.Map(f,gen);
     },
     Map:function(f,gen)
     {
      var f1;
      f1=gen.Next;
      return{
       Base:Arrays.map(f,gen.Base),
       Next:function(x)
       {
        return f(f1(x));
       }
      };
     },
     Mix:function(a,b)
     {
      var left;
      left={
       contents:false
      };
      return{
       Base:a.Base.concat(b.Base),
       Next:function()
       {
        left.contents=!left.contents;
        return left.contents?a.Next.call(null,null):b.Next.call(null,null);
       }
      };
     },
     Natural:Runtime.Field(function()
     {
      var g;
      g=Random.Int().Next;
      return{
       Base:[0,1],
       Next:function(x)
       {
        var value;
        value=g(x);
        return Math.abs(value);
       }
      };
     }),
     OneOf:function(seeds)
     {
      var index;
      index=Random.Within(1,Arrays.length(seeds));
      return{
       Base:seeds,
       Next:function()
       {
        return Arrays.get(seeds,index.Next.call(null,null)-1);
       }
      };
     },
     OptionOf:function(generator)
     {
      return Random.Mix(Random.Const({
       $:0
      }),Random.Map(function(arg0)
      {
       return{
        $:1,
        $0:arg0
       };
      },generator));
     },
     StandardUniform:Runtime.Field(function()
     {
      return{
       Base:[],
       Next:function()
       {
        return Math.random();
       }
      };
     }),
     String:Runtime.Field(function()
     {
      return{
       Base:[""],
       Next:function()
       {
        var len,cs;
        len=Random.Natural().Next.call(null,null)%100;
        cs=Arrays.init(len,function()
        {
         return Random.Int().Next.call(null,null)%256;
        });
        return String.fromCharCode.apply(undefined,cs);
       }
      };
     }),
     StringExhaustive:Runtime.Field(function()
     {
      return{
       Base:[null,""],
       Next:Random.String().Next
      };
     }),
     Tuple2Of:function(a,b)
     {
      return{
       Base:Seq.toArray(Seq.delay(function()
       {
        return Seq.collect(function(x)
        {
         return Seq.map(function(y)
         {
          return[x,y];
         },b.Base);
        },a.Base);
       })),
       Next:function()
       {
        return[a.Next.call(null,null),b.Next.call(null,null)];
       }
      };
     },
     Tuple3Of:function(a,b,c)
     {
      return{
       Base:Seq.toArray(Seq.delay(function()
       {
        return Seq.collect(function(x)
        {
         return Seq.collect(function(y)
         {
          return Seq.map(function(z)
          {
           return[x,y,z];
          },c.Base);
         },b.Base);
        },a.Base);
       })),
       Next:function()
       {
        return[a.Next.call(null,null),b.Next.call(null,null),c.Next.call(null,null)];
       }
      };
     },
     Within:function(low,hi)
     {
      return{
       Base:[low,hi],
       Next:function()
       {
        return Random.Natural().Next.call(null,null)%(hi-low)+low;
       }
      };
     }
    }
   }
  }
 });
 Runtime.OnInit(function()
 {
  Arrays=Runtime.Safe(Global.WebSharper.Arrays);
  ok=Runtime.Safe(Global.ok);
  Unchecked=Runtime.Safe(Global.WebSharper.Unchecked);
  console=Runtime.Safe(Global.console);
  Testing=Runtime.Safe(Global.WebSharper.Testing);
  Pervasives=Runtime.Safe(Testing.Pervasives);
  TestBuilder=Runtime.Safe(Pervasives.TestBuilder);
  test=Runtime.Safe(Global.test);
  Random=Runtime.Safe(Testing.Random);
  Math=Runtime.Safe(Global.Math);
  NaN1=Runtime.Safe(Global.NaN);
  Infinity1=Runtime.Safe(Global.Infinity);
  List=Runtime.Safe(Global.WebSharper.List);
  String=Runtime.Safe(Global.String);
  return Seq=Runtime.Safe(Global.WebSharper.Seq);
 });
 Runtime.OnLoad(function()
 {
  Random.StringExhaustive();
  Random.String();
  Random.StandardUniform();
  Random.Natural();
  Random.Int();
  Random.FloatExhaustive();
  Random.Float();
  Random.Boolean();
  return;
 });
}());
