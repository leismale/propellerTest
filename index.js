document.addEventListener("DOMContentLoaded", function() {
  let jsonLength;

  axios({
    method: "get",
    url: "https://design.propcom.co.uk/buildtest/accordion-data.json"
  }).then(res => {
    jsonLength = Object.keys(res.data.blocks).length;

    for (i = 0; i < jsonLength; i++) {
      const accordion = document.getElementById("container");
      const accordionElement = document.createElement("div");
      accordionElement.id = "accordionItem";
      accordionElement.classList.add("hidden");
      accordionElement.classList.add(`accordionItem`);
      accordionElement.classList.add(`accordionItem${i}`);
      const accordionHeading = document.createElement("div");
      accordionHeading.classList.add("heading");
      const h2 = document.createElement("h2");
      const heading = document.createTextNode(res.data.blocks[i].heading);
      const iTag = document.createElement("i");
      iTag.classList.add("fas", "fa-chevron-down");
      accordion
        .appendChild(accordionElement)
        .appendChild(accordionHeading)
        .appendChild(h2)
        .appendChild(heading)
        .parentNode.parentNode.appendChild(iTag)


      const accordionElementCreated = document.getElementsByClassName(`accordionItem${i}`);

      for(j=0; j<accordionElementCreated.length; j++){
        const accordionContent = document.createElement("div");
        accordionContent.classList.add("content");
        const p = document.createElement("p");
        const content = document.createTextNode(res.data.blocks[i].content);
        accordionElementCreated[j]
          .appendChild(accordionContent)
          .appendChild(p)
          .appendChild(content);
      }
    }

    let accordionItem = document.getElementsByClassName("accordionItem");
    let accordionHeading = document.getElementsByClassName("heading");
    let icon = document.getElementsByTagName("i");

    for (i = 0; i < accordionHeading.length; i++) {
      accordionItem[i].className = "accordionItem hidden";
      accordionHeading[i].addEventListener("click", toggleClass);
    }
  
    function toggleClass() {
      let itemClass = this.parentNode.className;

      for (i = 0; i < accordionItem.length; i++) {
        accordionItem[i].className = "accordionItem hidden";
      }
      if (itemClass == "accordionItem hidden") {
        this.parentNode.className = "accordionItem show";
      }
    }
  });
});