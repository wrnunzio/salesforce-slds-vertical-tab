# 🌟 Vertical Tabs LWC salesforce-slds-vertical-tab

## 🛠️ Overview
The **VerticalTabs** Lightning Web Component (LWC) provides a sleek vertical tab interface, perfect for organizing content in a user-friendly and accessible way. It leverages Salesforce Lightning Design System (SLDS) for a polished look and seamless integration.

---

## ✨ Features
- 🔄 **Dynamic Tabs**: Automatically renders tabs based on the provided API property.
- 🟢 **Active Tab Highlighting**: Dynamically updates the UI to show which tab is active.
- 🌀 **Loading Spinner**: Displays a spinner while content is being updated for a smooth user experience.
- 🎨 **Customizable Design**: Add labels, icons, and descriptions to tailor tabs to your use case.
- ♿ **Accessible by Design**: Implements ARIA roles for improved accessibility.

---

## ⚠️ Important Note
This implementation is a prototype and is not production-ready. It serves as a foundational example and requires further refinement and testing before being deployed in a live environment. Users should review and adjust the code to meet their specific requirements and ensure it adheres to best practices and security standards.

---

## 📋 HTML Structure
The component includes:
- 🏠 **Parent Container**: A `div` styled with the SLDS class `slds-vertical-tabs`.
- 📜 **Tab List**: A dynamically generated list of tabs (`<ul>`) containing:
    - 🔗 Clickable links styled as `slds-vertical-tabs__link`.
    - 🖼️ Integrated SLDS icons (`lightning-icon`) for visual enhancement.
    - 🏷️ Labels and tooltips for each tab.
- 🧩 **Slot for Content**: The `<slot>` named `tabContent` allows you to inject the content corresponding to each tab.

---

## 💻 JavaScript Functionality

### 📂 Properties
- **`@api tabs`**:  
  An array of objects defining each tab, including:
    - 🆔 `tabid`: Unique identifier for the tab.
    - 🟩 `isactive`: Marks the tab as active (true/false).
    - 🏷️ `tablabel`: The label displayed on the tab.
    - 🎨 `tabicon`: Name of the SLDS icon used for the tab.
    - ℹ️ `tabicondescription`: Tooltip text for the tab icon.

- **`@api showSpinner`**:  
  Toggles the visibility of a `lightning-spinner` during content transitions.

---

### 🔑 Key Methods
1. **`setTabActive(event)`**:  
   Activates the selected tab, updates the UI, and displays the corresponding content.

2. **`deactivateAllTab()`**:  
   Deactivates all tabs and hides all associated content.

3. **`parsefy(data)`**:  
   Clones objects to ensure input immutability.

---

## 🛠️ Example Usage

### 🧩 Parent Component Markup
```html
<c-vertical-tabs tabs={tabs} show-spinner="true">
    <div slot="tabContent" data-tabidcontent="Tab1" class="slds-vertical-tabs__content">
        <p>📄 Content for Tab 1</p>
    </div>
    <div slot="tabContent" data-tabidcontent="Tab2" class="slds-vertical-tabs__content">
        <p>📄 Content for Tab 2</p>
    </div>
</c-vertical-tabs>
```

### 🖥️ Parent Component JavaScript
```javascript
import { LightningElement } from 'lwc';

export default class Container extends LightningElement {
    tabs = [
        {
            tabid: 'Tab1',
            isactive: true,
            tablabel: 'First Tab',
            tabicon: 'standard:opportunity',
            tabicondescription: 'Opportunity icon'
        },
        {
            tabid: 'Tab2',
            isactive: false,
            tablabel: 'Second Tab',
            tabicon: 'standard:account',
            tabicondescription: 'Account icon'
        }
    ];
}
```

---

## 🎨 Styling
This component uses SLDS utility classes (e.g., `slds-show`, `slds-hide`, `slds-is-active`) for layout and visuals. You can extend or override these styles with your own custom CSS if needed.

---



