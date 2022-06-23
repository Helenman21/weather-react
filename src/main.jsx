import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HelpPage from '../../my-react-app/src/components/pages/Helpppage'


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter >
				<Routes>
					<Route path="/" exact element={<App />} />
					<Route path="/help" element={<HelpPage />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)
