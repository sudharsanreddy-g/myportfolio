/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "AWS Learning: Cloud Essentials",
    sponsers:
      "Amazon Web Services Training and Certification",
    description:
      "Earners of this badge have developed knowledge of foundational AWS Cloud concepts with a focus on AWS Compute, Storage, Networking and Database services, security, architecture, pricing, and support.",
    issuedYear: 2023,
   image: "sudharsan_assets/sudharsan_images/research-page/aws-learning-cloud-essentials.png",
    Verify_Badge: {
      badgeURL:
        "https://www.credly.com/badges/ad732075-81cc-47b1-873e-46783e5cad3b/public_url",
    },
 
  },

  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    sponsers:
      "Amazon Web Services Training and Certification",
    description:
      "Earners of this badge have demonstrated basic solution building knowledge using AWS services and have a fundamental understanding of AWS Cloud concepts. Badge earners have acquired hands-on experience with compute, networking, database and security services.",
    issuedYear: 2023,
    badgeURL: "popup2",
    image: "sudharsan_assets/sudharsan_images/research-page/aws-cloud-quest-cloud-practitioner.png",
    Verify_Badge: {
      badgeURL:
        "https://www.credly.com/badges/1513ceb4-fc11-46d5-9545-f4a8db367675/public_url",
    },

  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      sponsers,
      description,
      issuedYear,
      badgeURL,
      Verify_Badge,
      
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "sponsers"> ${sponsers} </div> 
                    
                    <div class="rdescription"> ${description} 
                        <div class="researchY">${issuedYear}</div>
                    </div>
                    
                    <!--VERIFY BADGE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                   
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${badgeURL}" aria-expanded="false" aria-controls="${badgeURL}">
                            Verify Badge
                        </button>
                    </div>
                   
                    <div id="${badgeURL}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${Verify_Badge.badgeURL}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
