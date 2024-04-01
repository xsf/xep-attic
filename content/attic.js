document.addEventListener("DOMContentLoaded", function () {
  const notice = document.createElement("div");
  notice.id = "attic_notice";
  document.getElementsByTagName("body")[0].prepend(notice);

  const noticeText = document.createElement("strong");
  const link = document.createElement("a");
  notice.append(noticeText);
  notice.append(link);

  if (window.location.pathname === "/extensions/attic/") {
    noticeText.innerHTML = "Beware: You are browsing archived versions of XEPs.&nbsp;";
    link.innerText = "Browse latest versions";
    link.href = `${window.location.protocol}//${window.location.host}/extensions/`
  } else {
    noticeText.innerHTML =
      "Beware: The content that is displayed here is an archived version of the document, that has been updated.&nbsp;";

    const xepNumber = window.location.pathname.match(/\d{4}/)[0];
    link.innerText = "View latest version";
    link.href = `${window.location.protocol}//${window.location.host}/extensions/xep-${xepNumber}.html`;
  }
});
