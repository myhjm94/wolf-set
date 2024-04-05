// navbar menu
document.addEventListener('click', function (event) {
    // 获取所有菜单
    const menuGroups = document.querySelectorAll('.filter-button-group');
    const isMenuToggle = event.target.matches('.menu-toggle');

    // 如果点击的是菜单触发按钮
    if (isMenuToggle) {
        const toggleId = event.target.id;
        const filterGroupId = 'filter-group-' + toggleId.split('-')[2];
        const filterGroup = document.getElementById(filterGroupId);

        // 如果当前菜单未展开，则关闭所有菜单，并展开当前点击的菜单
        if (!filterGroup.classList.contains('active')) {
            // 关闭所有菜单
            menuGroups.forEach(function (menu) {
                menu.classList.remove('active');
            });
            // 展开点击的菜单
            filterGroup.classList.add('active');
        } else {
            // 如果当前菜单已展开，再次点击则关闭
            filterGroup.classList.remove('active');
        }
    } else {
        // 如果点击的不是菜单触发按钮
        // 检查点击是否发生在已展开的菜单内部
        const isInsideMenu = Array.from(menuGroups).some(function (menu) {
            return menu.contains(event.target);
        });

        // 如果点击的不是菜单内部，关闭所有菜单
        if (!isInsideMenu) {
            menuGroups.forEach(function (menu) {
                menu.classList.remove('active');
            });
        }
    }
});

// Isotope
let buttonFilters = {};

// Update all buttons matching the filter
function updateButtons(filterValue, isAdd) {
    // Select all buttons that match the filter value
    const buttons = document.querySelectorAll(`.filter-btn[data-filter="${filterValue}"]`);
    // Update class for all matching buttons
    buttons.forEach(function (button) {
        if (isAdd) {
            button.classList.add('is-checked');
        } else {
            button.classList.remove('is-checked');
        }
    });
}

// Flatten object into a string of filters
function concatValues(obj) {
    let value = '';
    for (const prop in obj) {
        value += obj[prop].join('');
    }
    return value;
}

// initialize Isotope
const grid = document.querySelector('.grid');
const iso = new Isotope(grid, {
    itemSelector: '.grid-item',
    masonry: {
        columnWidth: 320,
        fitWidth: true,
        gutter: 10
    }
});

// use imagesLoaded, trigger layout after each image loads
imagesLoaded(grid).on('progress', function (instance, image) {
    iso.layout();
});

// Use event delegation for all filter button groups
document.querySelectorAll('.filter-button-group').forEach(function (group) {
    group.addEventListener('click', function (event) {
        if (!event.target.matches('.filter-btn')) {
            return; // Skip clicks that are not on buttons
        }
        const filterValue = event.target.getAttribute('data-filter');
        const filterGroup = event.target.getAttribute('data-filter-group');
        // Check if filter is already in the buttonFilters
        const isFilterActive = buttonFilters[filterGroup] && buttonFilters[filterGroup].includes(filterValue);
        // Toggle filter in buttonFilters
        if (isFilterActive) {
            buttonFilters[filterGroup] = buttonFilters[filterGroup].filter(f => f !== filterValue);
            updateButtons(filterValue, false); // Update all buttons to remove 'is-checked'
        } else {
            buttonFilters[filterGroup] = buttonFilters[filterGroup] || [];
            buttonFilters[filterGroup].push(filterValue);
            updateButtons(filterValue, true); // Update all buttons to add 'is-checked'
        }

        // Combine filters
        const filterString = concatValues(buttonFilters);

        // Apply filter without causing layout to be called again
        iso.arrange({ filter: filterString });
    });
});

// Reset filters and update buttons
function resetFilters() {
    // Clear buttonFilters object
    buttonFilters = {};
    // Remove 'is-checked' class from all filter buttons
    document.querySelectorAll('.filter-btn.is-checked').forEach(function (button) {
        button.classList.remove('is-checked');
    });
    // No need to manually hide the button here, it will be handled by showResetButton()
    // Apply filter to show all items
    iso.arrange({ filter: '*' });
    // Ensure the reset button visibility is updated
    showResetButton();
}

// Show or hide the reset button with animation
function showResetButton() {
    const hasActiveFilters = Object.keys(buttonFilters).some(key => buttonFilters[key].length > 0);
    const resetButton = document.getElementById('reset-filters');
    if (hasActiveFilters) {
        resetButton.style.display = 'block'; // Make sure the button is visible before adding 'show'

        // Trigger a reflow to ensure the animation plays
        (() => resetButton.offsetWidth)();

        resetButton.classList.add('show');
    } else {
        resetButton.classList.remove('show');
        // Add a transitionend event listener to hide the button after the animation
        resetButton.addEventListener('transitionend', function hideButton() {
            // Check if the button is still not part of the 'show' class before hiding it
            if (!resetButton.classList.contains('show')) {
                resetButton.style.display = 'none';
            }
            resetButton.removeEventListener('transitionend', hideButton);
        });
    }
}

// Event listener for the reset button
document.getElementById('reset-filters').addEventListener('click', function () {
    resetFilters();
});

// Modify the existing click event on filter buttons to call showResetButton
document.querySelectorAll('.filter-button-group').forEach(function (group) {
    group.addEventListener('click', function (event) {
        // Existing code...
        // After the existing filtering logic, add:
        showResetButton();
    });
});

// Call showResetButton after initializing to make sure button is in correct state
showResetButton();

// If there's other code that clears filters, make sure to call showResetButton() after that action
// Function to shake the reset button
function shakeResetButton() {
    const resetButton = document.getElementById('reset-filters');
    resetButton.classList.add('shake');
    resetButton.addEventListener('animationend', function () {
        resetButton.classList.remove('shake');
    });
}

// Modify the existing arrangeComplete event for Isotope to check for zero results
iso.on('arrangeComplete', function (filteredItems) {
    // Check if no items are filtered
    if (filteredItems.length === 0) {
        // Shake the reset button to notify the user
        shakeResetButton();
    }
});