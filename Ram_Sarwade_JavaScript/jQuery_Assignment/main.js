$(document).ready(function () {
  let emailCount = 1;
  const maxEmails = 5;
  let address = 1;

  $(".rs-add-email").click(function (e) {
    e.preventDefault();

    if (emailCount >= maxEmails) return;

    emailCount++;

    $(".rs-email").append(`
      <div class="email-row email-block">
        <input type="email" name="email" required />
        <button type="button" class="rs-remove-email">-</button>
      </div>
    `);
  });

  // Remove email )
  $(".rs-email").on("click", ".rs-remove-email", function () {
    $(this).parent().remove();
    emailCount--;
  });

  //   ADDRESS SECTION
  $(".rs-add-address").on("click", function (e) {
    e.preventDefault();
    if (address == 2) return;
    address++;

    $(".rs-address").append(`
      <div class="address-block">
        <label>Street</label><br />
        <input type="text" name="street" required /><br />

        <label>City</label><br />
        <input type="text" name="city" required /><br />

        <label>State</label><br />
        <input type="text" name="state" required /><br />

        <label>Country</label><br />
        <input type="text" name="country" required /><br />

        <label>PIN Code</label><br />
        <input
          type="text"
          name="pincode"
          maxlength="6"
          required
          oninput="this.value=this.value.replace(/[^0-9]/g,'')"
        /><br />

        <button type="button" class="remove-address">Remove Address</button>
        <hr>
      </div>
    `);
  });

  // Remove address block
  $(".rs-address").on("click", ".remove-address", function () {
    $(this).closest(".address-block").remove();
    address--;
  });

  //   get data

  $(".rs-main").on("submit", function (e) {
    e.preventDefault();

    let firstName = $("#first_name").val();
    let lastName = $("#last_name").val();
    let phone = $("#phone-no").val();
    let gender = $("input[name='gender']:checked").val() || "";

    let emails = [];
    $("input[name='email']").each(function () {
      if ($(this).val()) emails.push($(this).val());
    });

    let addresses = [];

    $(".address-block").each(function () {
      let street = $(this).find("input[name='street']").val();
      let city = $(this).find("input[name='city']").val();
      let state = $(this).find("input[name='state']").val();
      let country = $(this).find("input[name='country']").val();
      let pincode = $(this).find("input[name='pincode']").val();

      addresses.push(`${street}, ${city}, ${state}, ${country} - ${pincode}`);
    });

    $("#dataTable tbody").append(`
      <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${gender}</td>
        <td>${emails.join("<br>")}</td>
        <td>${phone}</td>
        <td>${addresses.join("<hr>")}</td>
      </tr>
    `);

    // Reset form

    this.reset();
    $(".address-block").remove();
    $(".email-block").remove();
  });
  $(".import").on("click", function (e) {
    e.preventDefault();

    $.get("example.json", function (res) {
      for (const key in res) {
        if (!Object.hasOwn(res, key)) continue;

        // Radio button handling
        if (key === "gender") {
          $(`input[name="gender"][value="${res[key]}"]`).prop("checked", true);
        }
        // Normal inputs (by name)
        else {
          $(`input[name="${key}"]`).val(res[key]);
        }
      }
    });
  });
});
