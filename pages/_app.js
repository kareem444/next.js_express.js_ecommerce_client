import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../redux/reducers/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import LayOut from "../component/LayOut";
import { composeWithDevTools } from "redux-devtools-extension";

function MyApp({ Component, pageProps }) {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return (
    <Provider store={store}>
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </Provider>
  );
}

export default MyApp;
