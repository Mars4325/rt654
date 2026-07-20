/**
 * Extension: rt654
 * 
 * This is the main entry point for your extension.
 * The activate function is called when your extension is activated.
 */
export function activate(context) {
	console.log('Extension "rt654" is now active!')

	// Register your commands, views, and other contributions here
	// Example:
	// const disposable = context.commands.registerCommand('rt654.helloWorld', () => {
	//   context.ui.showInformationMessage('Hello World from rt654!')
	// })
	// context.subscriptions.push(disposable)
}

/**
 * This function is called when your extension is deactivated
 */
export function deactivate() {
	console.log('Extension "rt654" is now deactivated.')
}
