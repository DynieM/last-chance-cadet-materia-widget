const path = require('path')
const srcPath = path.join(__dirname, 'src') + path.sep
const outputPath = path.join(__dirname, 'build') + path.sep
const widgetWebpack = require('materia-widget-development-kit/webpack-widget')

const entries = widgetWebpack.getDefaultEntries()
const copyList = widgetWebpack.getDefaultCopyList()

entries['creator.js'] = [
	path.join(srcPath, 'modules', 'matching.coffee'),
	path.join(srcPath, 'controllers', 'creator.coffee'),
	path.join(srcPath, 'directives', 'audioControls.coffee'),
	path.join(srcPath, 'directives', 'focusMe.coffee'),
	path.join(srcPath, 'directives', 'ngEnter.coffee'),
	path.join(srcPath, 'directives', 'inputStateManager.coffee')
]

entries['player.js'] = [
	path.join(srcPath, 'modules', 'matching.coffee'),
	path.join(srcPath, 'controllers', 'player.coffee'),
	path.join(srcPath, 'directives', 'audioControls.coffee'),
]

entries['audioControls.css'] = [
	srcPath + 'audioControls.scss',
	srcPath + 'audioControls.html'
]

// options for the build
let options = {
	entries,
	copyList
}

module.exports = widgetWebpack.getLegacyWidgetBuildConfig(options)
