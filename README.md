# 📊 Vertical Tabs LWC Component salesforce-slds-vertical-tab

## 🔎 Overview
The Vertical Tabs component is a Lightning Web Component (LWC) realized with Salesforce slds. It provides a customizable, vertical tab interface that can be easily integrated into various Salesforce pages and apps.

## ✨ Features
- 📏 Vertical tab layout for efficient space usage
- 🔄 Dynamic tab rendering based on provided data
- 🖼️ Custom icons for each tab
- ♿ Accessibility support with ARIA attributes
- 🔄 Loading spinner for asynchronous content loading

## 📁 File Structure
- `verticalTabs.html`: The HTML template for the component
- `verticalTabs.js`: The JavaScript file containing the component's logic
- `verticalTabs.css`: The CSS file for component styling (not provided in the snippet)

## 🚀 Usage
To use this component in your Salesforce project:

1. Import the component into your desired Lightning page or parent component.
2. Provide an array of tab objects to the `tabs` property.
3. Use the `tabContent` slot to pass in the content for each tab.

## ⚠️ Important Note
This implementation is a prototype and is not production-ready. It serves as a foundational example and requires further refinement and testing before being deployed in a live environment. Users should review and adjust the code to meet their specific requirements and ensure it adheres to best practices and security standards.

## 🎥 Demonstration
```html
<c-vertical-tabs tabs={tabsData}>
    <div slot="tabContent" data-tabidcontent="tab1">
        <!-- Content for Tab 1 -->
    </div>
    <div slot="tabContent" data-tabidcontent="tab2">
        <!-- Content for Tab 2 -->
    </div>
</c-vertical-tabs>
```
## 🏷️ Tab Object Structure
Each tab in the `tabs` array should have the following properties:
- `tabid`: Unique identifier for the tab
- `tablabel`: Display label for the tab
- `tabicon`: Lightning Design System icon name
- `tabicondescription`: Description for the icon (for accessibility)
- `isactive`: Boolean indicating if the tab is currently active
- `ariaControls`: ID of the content controlled by this tab
- `chosenTabClassLi`: CSS classes for the tab's list item

## 🎨 Customization
The component uses SLDS (Salesforce Lightning Design System) classes for styling. You can further customize the appearance by modifying the CSS file (not provided in the snippet).

## 📝 Notes
- The component includes a loading spinner that can be shown/hidden using the `showSpinner` property.
- Tab switching is handled by the `setTabActive` function.

## 🧠 verticalTabs.js Description
The `verticalTabs.js` file contains the core logic for the Vertical Tabs component:

- It defines a `tabsConst` object with default properties for each tab.
- The component uses `@api` decorators to expose properties for external configuration.
- The `tabs` setter method processes the input tab data, adding necessary properties and classes.
- It includes methods for tab activation (`setTabActive`) and deactivation (`deactivateAllTab`).
- The component handles dynamic content loading and applies appropriate ARIA attributes for accessibility.
- A `showSpinner` property is used to control the visibility of a loading spinner during tab operations.
- The `connectedCallback` lifecycle hook is present but currently empty, allowing for future initialization logic.
- The component uses `querySelectorAll` to manipulate DOM elements for tab switching and content display.


