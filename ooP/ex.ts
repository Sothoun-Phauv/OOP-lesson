/*
 INSTRUCTIONS

	Note : read extra explanation of PDF 
	
	We want to model   Menu and   MenuItem

  - An Menu has:
			- the menu label (string)
			- the list of menu items (array of MenuItem)


  - An MenuItem has:
			- the menu item label (string)
			- the callBack function called when click (string)

	Q1 : Create the 2 types.

	Q2 : Create the following menus :
				menu File
						label : "File"
						items : 
							name: "Save ...", callBack: "onClickSave" 
							name: "Open...", callBack: "onClickOpen" 
							name: "Preferences", callBack: "onClickPreferences" 
   
						menu Edition
						label : "Edition"
						items : 
							name: "Copy", callBack: "onCopy" 
							name: "Paste", callBack: "onPaste" 
*/

type MenuItem = {
	name: string;
	callBack: string;
  };
  
  type Menu = {
	label: string;
	items: MenuItem[];
  };
  
  let saveItem: MenuItem = { name: "Save ...", callBack: "onClickSave" };
  let openItem: MenuItem = { name: "Open...", callBack: "onClickOpen" };
  let preferenceItem: MenuItem = {
	name: "Preferences",
	callBack: "onClickPreferences",
  };
  
  let file: Menu = {
	label: "File",
	items: [saveItem, openItem, preferenceItem],
  };
  
  let menuEdition: Menu = {
	label: "Edition",
	items: [
	  { name: "Copy", callBack: "onCopy" },
	  { name: "Paste", callBack: "onPaste" },
	],
  };