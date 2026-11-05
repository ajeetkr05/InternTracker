import { applications } from "./data.js";
import { formatDisplayDate } from "./date.js";

function renderApplication(applications) {
  const html = document.querySelector(".js-applications");

  applications.forEach((element) => {
    html.innerHTML += `
            <tr>
            <td>
                <div class="company-cell">
                <span class="company-icon icon-${element.company.toLowerCase()}">${element.company.charAt(0)}</span>
                <div>
                    <strong>${element.company}</strong
                    ><span>${element.role}</span>
                </div>
                </div>
            </td>
            <td>${element.location}</td>
            <td>${formatDisplayDate(element.dateApplied)}</td>
            <td><span class="status status-${element.status.toLowerCase()}">${element.status}</span></td>
            <td>
                <a
                class="table-link"
                href="application-form.html"
                aria-label="Open form for ${element.company} application"
                >Edit <span aria-hidden="true">↗</span></a
                >
            </td>
            </tr>
        `;
  });
}

renderApplication(applications);
