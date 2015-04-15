declare module WebSharper {
    module Web {
        interface IUserSession {
            GetLoggedInUser(): any;
            LoginUser(x0: string, persistent: __ABBREV.__WebSharper.OptionProxy<boolean>): any;
            Logout(): any;
            get_IsAvailable(): boolean;
        }
        interface IContext {
            get_RootFolder(): string;
            get_RequestUri(): any;
            get_UserSession(): __ABBREV.__Web.IUserSession;
        }
        interface AspNetFormsUserSession {
        }
        interface RpcHandler {
        }
        interface RpcModule {
        }
        interface ScriptManager {
        }
        interface Control {
        }
    }
}
declare module __ABBREV {
    
    export import __WebSharper = WebSharper;
    export import __Web = WebSharper.Web;
}
