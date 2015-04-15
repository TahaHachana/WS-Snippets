declare module Sitelet {
    module Site {
        interface Website {
        }
    }
    module Highlight {
        module Server {
            interface Token {
            }
        }
        interface Result {
        }
    }
    module Html5 {
        module Snippet14 {
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
            var btn : {
                (txt: string): __ABBREV.__Client.Element;
            };
            var main : {
                (): __ABBREV.__Client.Element;
            };
        }
        module Snippet13 {
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
        module Snippet12 {
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
        module Snippet11 {
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
        module Snippet10 {
            module JS {
                var toStr : {
                    <_M1>(x: _M1): string;
                };
                var setText : {
                    <_M1>(id: string, property: _M1): void;
                };
                var displayPosition : {
                    (p: __ABBREV.__Geolocation.Position): void;
                };
                var tr : {
                    (thTxt: string, tdId: string): __ABBREV.__Client.Element;
                };
                var main : {
                    (): __ABBREV.__Client.Element;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
        module Snippet9 {
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
            var main : {
                (): __ABBREV.__Client.Element;
            };
        }
        module Snippet8 {
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
            var main : {
                (): __ABBREV.__Client.Element;
            };
        }
        module Snippet7 {
            module Client {
                var draw : {
                    (ctx: __ABBREV.__JavaScript.CanvasRenderingContext2D): void;
                };
                var loop : {
                    (ctx: __ABBREV.__JavaScript.CanvasRenderingContext2D): any;
                };
                var main : {
                    (): __ABBREV.__Client.Element;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
        module Snippet6 {
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
        module Snippet5 {
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
        module Snippet4 {
            module Client {
                var log : {
                    (text: string, color: string): void;
                };
                var append : {
                    (id: string, btn: __ABBREV.__Client.Element): void;
                };
                var handleEvents : {
                    (ws: __ABBREV.__JavaScript.WebSocket, disconnectBtn: __ABBREV.__Client.Element, sendBtn: __ABBREV.__Client.Element): void;
                };
                var connect : {
                    (msgText: __ABBREV.__Client.Element): void;
                };
                var main : {
                    (): __ABBREV.__Client.Element;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
        module Snippet3 {
            module Client {
                var main : {
                    (): __ABBREV.__Client.Element;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
        module Snippet2 {
            module Client {
                var tr : {
                    (td: string, _td_: string): __ABBREV.__Client.Element;
                };
                var main : {
                    (): __ABBREV.__Client.Element;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
        module Snippet1 {
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
    }
    module Js {
        module Snippet9 {
            module JS {
                var timerHandle : {
                    (btn: __ABBREV.__Client.Element): any;
                };
                var clearBtn : {
                    (): __ABBREV.__Client.Element;
                };
                var clearTimeout : {
                    (btn: __ABBREV.__Client.Element, handle: any): void;
                };
                var main : {
                    (): __ABBREV.__Client.Element;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
        module Snippet8 {
            module JS {
                var img : {
                    (x: string): __ABBREV.__Client.Element;
                };
                var imgDiv : {
                    (img: __ABBREV.__Client.Pagelet): __ABBREV.__Client.Element;
                };
                var handleDragStart : {
                    (idRef: __ABBREV.__WebSharper.ref<string>, elt: __ABBREV.__Client.Element): void;
                };
                var handleDragging : {
                    (elt: __ABBREV.__Client.Element, idRef: __ABBREV.__WebSharper.ref<string>): void;
                };
                var main : {
                    (): __ABBREV.__Client.Element;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
        module Snippet7 {
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
        module Snippet6 {
            module Client {
                var accordionGroup : {
                    (num: number): __ABBREV.__Client.Element;
                };
                var main : {
                    (): __ABBREV.__Client.Element;
                };
                var loremIpsum : {
                    (): string;
                };
                var style : {
                    (): string;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
        module Snippet5 {
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
        module Snippet4 {
            module Client {
                var th : {
                    (txt: string): __ABBREV.__Client.Element;
                };
                var tr : {
                    (level: string): __ABBREV.__Client.Element;
                };
                var main : {
                    (): __ABBREV.__Client.Element;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
        module Snippet3 {
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
        module Snippet2 {
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
        module Snippet1 {
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
    }
    module Twitter {
        module Snippet1 {
            interface Tweet {
                id: string;
                screenName: string;
                avatar: string;
                statusAsHtml: string;
                createdAt: string;
                isRetweeted: boolean;
                retweetedId: __ABBREV.__WebSharper.OptionProxy<string>;
                retweetedScreenName: __ABBREV.__WebSharper.OptionProxy<string>;
            }
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
    }
    module Geolocation {
        module Snippet1 {
            module Client {
                var setText : {
                    (id: string, txt: string): void;
                };
                var toStr : {
                    <_M1>(f: _M1): string;
                };
                var display : {
                    (p: __ABBREV.__Geolocation.Position): void;
                };
                var getPosition : {
                    (): any;
                };
                var tr : {
                    (thTxt: string, tdId: string): __ABBREV.__Client.Element;
                };
                var main : {
                    (): __ABBREV.__Client.Element;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
    }
    module Google {
        module Snippet3 {
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
            var map : {
                (): __ABBREV.__Client.Element;
            };
        }
        module Snippet2 {
            module Client {
                var dataTable : {
                    <_M1, _M2>(data: __ABBREV.__List.T<any>): __ABBREV.__visualization.DataTable;
                };
                var pie : {
                    <_M1, _M2>(data: __ABBREV.__List.T<any>, dom: __ABBREV.__Dom.Element): void;
                };
                var main : {
                    (): __ABBREV.__Client.Element;
                };
                var data : {
                    (): __ABBREV.__List.T<any>;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
        module Snippet1 {
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
    }
    module JQueryUI {
        module Snippet2 {
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
        module Snippet1 {
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
    }
    module JQuery {
        module Snippet1 {
            interface Control {
                get_Body(): __ABBREV.__Client.IControlBody;
            }
        }
    }
    module Login {
        module Client {
            var loginPiglet : {
                <_M1>(init: any): __ABBREV.__Piglets.Piglet1<any, {
                    (x: {
                        (x: __ABBREV.__Piglets.Stream1<string>): {
                            (x: __ABBREV.__Piglets.Stream1<string>): {
                                (x: __ABBREV.__Piglets.Submitter<any>): _M1;
                            };
                        };
                    }): _M1;
                }>;
            };
            var loginRender : {
                <_M1>(name: __ABBREV.__Piglets.Stream1<string>, password: __ABBREV.__Piglets.Stream1<string>, submit: __ABBREV.__Piglets.Submitter<_M1>): __ABBREV.__Client.Element;
            };
            var form : {
                (redirectUrl: string): __ABBREV.__Client.Element;
            };
        }
        interface LoginInfo {
            Username: string;
            Password: string;
        }
        interface Access {
        }
        interface Control {
            get_Body(): __ABBREV.__Client.IControlBody;
        }
    }
    module NewSnippet {
        module Client {
            var tagPiglet : {
                <_M1>(init: string): __ABBREV.__Piglets.Piglet1<string, {
                    (x: {
                        (x: __ABBREV.__Piglets.Stream1<string>): _M1;
                    }): _M1;
                }>;
            };
            var snippetPiglet : {
                <_M1, _M2>(init: any): __ABBREV.__Piglets.Piglet1<any, {
                    (x: {
                        (x: __ABBREV.__Piglets.Stream1<string>): {
                            (x: __ABBREV.__Piglets.Stream1<string>): {
                                (x: __ABBREV.__Piglets.Stream1<string>): {
                                    (x: __ABBREV.__Piglets.Stream1<string>): {
                                        (x: __ABBREV.__Piglets.Stream1<string>): {
                                            (x: __ABBREV.__Piglets.Stream1<string>): {
                                                (x: __ABBREV.__Many.UnitStream<string, {
                                                    (x: __ABBREV.__Piglets.Stream1<string>): _M1;
                                                }, _M1>): {
                                                    (x: __ABBREV.__Piglets.Submitter<any>): _M2;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    }): _M2;
                }>;
            };
            var tagView : {
                (tag: __ABBREV.__Piglets.Stream1<string>): __ABBREV.__Client.Element;
            };
            var Button : {
                (writer: __ABBREV.__Piglets.Writer<string>): __ABBREV.__Client.Element;
            };
            var snippetView : {
                <_M1, _M2, _M3>(id: __ABBREV.__Piglets.Stream1<string>, title: __ABBREV.__Piglets.Stream1<string>, url: __ABBREV.__Piglets.Stream1<string>, metaDescription: __ABBREV.__Piglets.Stream1<string>, description: __ABBREV.__Piglets.Stream1<string>, descriptionHtml: __ABBREV.__Piglets.Stream1<string>, tags: __ABBREV.__Many.Stream<string, {
                    (x: __ABBREV.__Piglets.Stream1<string>): __ABBREV.__Client.Element;
                }, __ABBREV.__Client.Element, _M1, _M2>, submit: __ABBREV.__Piglets.Submitter<_M3>): __ABBREV.__Client.Element;
            };
            var form : {
                (): __ABBREV.__Client.Element;
            };
        }
        interface NewSnippet {
            Id: string;
            Title: string;
            Url: string;
            MetaDescription: string;
            Description: string;
            DescriptionHtml: string;
            Tags: string[];
        }
        interface Control {
            get_Body(): __ABBREV.__Client.IControlBody;
        }
    }
    module Mongo {
        interface Snippet {
            _id: any;
            SnipId: number;
            Title: string;
            Url: string;
            MetaDesc: string;
            Desc: string;
            DescHtml: string;
            Tags: string[];
            Date: __ABBREV.__WebSharper.DateTimeProxy;
        }
    }
    module Search {
        interface Control {
            get_Body(): __ABBREV.__Client.IControlBody;
        }
    }
    module Model {
        interface Action {
        }
    }
    module Skin {
        interface DefaultPage {
            Title: string;
            MetaDescription: string;
            Body: any;
            Footer: any;
        }
    }
}
declare module __ABBREV {
    
    export import __Client = WebSharper.Html.Client;
    export import __Geolocation = WebSharper.JavaScript.Geolocation;
    export import __JavaScript = WebSharper.JavaScript;
    export import __WebSharper = WebSharper;
    export import __List = WebSharper.List;
    export import __visualization = google.visualization;
    export import __Dom = WebSharper.JavaScript.Dom;
    export import __Piglets = WebSharper.Piglets;
    export import __Many = WebSharper.Piglets.Many;
}
