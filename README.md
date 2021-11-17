#내가 쓰기 위한 nextjs bolierplate

## directory 구조
https://unlyed.github.io/next-right-now/reference/folder-structure

```
  /public
    favicon.ico

	/src
		/common
			components
			hocs
			hooks
			stores
			types
			utils
			/server
				middlewares	
		/modules
			/config
				airtableSchema.ts
				constants.ts
				i18nConfig.js
			/fetchAirtableDataset
				types
				utils
			/amplitude
				types
				utils
			/api
				types
				utils
			/airtableApi
				types
				utils
			/vercelCache
				types
				utils
			/cookieManager
				types
				utils
			/tests
				env.test.ts
				extend-jest
				tests-mocks.ts
				mocks
			sentry
			nextjs
			...
		/pages
           		 _app.tsx
           		 _document.tsx
            		index.tsx
```

