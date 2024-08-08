import React from "react";
import "./create.css";

export const Create = () => {
  return (
    <>
      <section className="newPost">
        <form className="formContainer">
          <label class="label">Text</label>
          <textarea rows="15"></textarea>

          <label class="label">Article Preview</label>
          <div className="titlePart">
            <label class="sublabel">Title</label>
            <input type="text" />
            <label className="sublabel">Tags</label>
            <input type="text" />
          </div>

          <label class="label">Featured Image</label>
          <div className="imgUpload">
            <input type="file" id="file" name="file" />
            <label for="file">
              <div>
                <span className="dropFile">Drop photo here</span>
                <span className="orText">Or</span>
                <span className="browseText">Browse</span>
              </div>
            </label>
          </div>
          <button class="button">Post article</button>
        </form>
      </section>
    </>
  );
};
