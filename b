drop_down_btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const nav = document.createElement("nav");
        nav.className = "flex nav pop";
        const logo = document.createElement("img");
        logo.src = "./assets/img/logo.png";
        logo.loading = "lazy";
        logo.alt = "logo";
        const navItemDiv = document.createElement("div");
        navItemDiv.id = "nav-item";
        navItemDiv.className = "flex flex-col";
        const ul = document.createElement("ul");
        ul.className = "flex-nav-link flex-col";
        const nav_links = [
          { text: "Home", href: "#" },
          { text: "About Us", href: "#about-us" },
          { text: "FAQ", href: "#faq" },
          { text: "Gallery", href: "#gallery" },
        ];
        nav_links.forEach((link) => {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = link.href;
          a.className = "nav-link nav-pad-item";
          a.textContent = link.text;
          li.appendChild(a);
          ul.appendChild(li);
        });

        const contactBtn = document.createElement("button");
        contactBtn.type = "button";
        contactBtn.className = "nav-pad-item pop";
        contactBtn.id = "contact";
        contactBtn.textContent = "Contact us";

        navItemDiv.appendChild(ul);
        navItemDiv.appendChild(contactBtn);

        nav.appendChild(logo);
        nav.appendChild(navItemDiv);
      });