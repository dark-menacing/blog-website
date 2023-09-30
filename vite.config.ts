export default {
	css: {
		preprocessorOptions: {
		  	scss: {
				additionalData: '@use "src/style/_variables.scss" as *;',
			},
	    },
	},
}