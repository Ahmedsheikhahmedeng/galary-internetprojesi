/* Theme Management - Handles persistent dark/light mode across all pages */
(function () {
    const STORAGE_KEY = "site-theme";

    function getInitialTheme() {
        const savedTheme = localStorage.getItem(STORAGE_KEY);
        if (savedTheme === "tema-koyu" || savedTheme === "tema-acik") {
            return savedTheme;
        }
        return "tema-acik";
    }

    const initialTheme = getInitialTheme();

    // Immediately apply theme class to html/body to prevent flash on page load
    document.documentElement.classList.remove("tema-acik", "tema-koyu");
    document.documentElement.classList.add(initialTheme);

    function updateToggleButtons(theme) {
        const toggleButtons = document.querySelectorAll("#theme-toggle, .theme-toggle-btn");
        toggleButtons.forEach((btn) => {
            if (theme === "tema-koyu") {
                btn.textContent = "SABAH MODU";
                btn.setAttribute("aria-label", "Sabah moduna geç");
            } else {
                btn.textContent = "GECE MODU";
                btn.setAttribute("aria-label", "Gece moduna geç");
            }
        });
    }

    function setTheme(newTheme) {
        document.documentElement.classList.remove("tema-acik", "tema-koyu");
        document.documentElement.classList.add(newTheme);

        if (document.body) {
            document.body.classList.remove("tema-acik", "tema-koyu");
            document.body.classList.add(newTheme);
        }

        localStorage.setItem(STORAGE_KEY, newTheme);
        updateToggleButtons(newTheme);
    }

    document.addEventListener("DOMContentLoaded", () => {
        // Ensure body matches documentElement theme
        const activeTheme = document.documentElement.classList.contains("tema-koyu") ? "tema-koyu" : "tema-acik";
        setTheme(activeTheme);

        // Attach click listeners to all theme toggle buttons
        const toggleButtons = document.querySelectorAll("#theme-toggle, .theme-toggle-btn");
        toggleButtons.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const current = document.documentElement.classList.contains("tema-koyu") ? "tema-koyu" : "tema-acik";
                const nextTheme = current === "tema-koyu" ? "tema-acik" : "tema-koyu";
                setTheme(nextTheme);
            });
        });
    });
})();
