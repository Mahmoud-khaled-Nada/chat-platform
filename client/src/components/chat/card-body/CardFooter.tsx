import { FiPaperclip, FiSend } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import { useRef } from "react";
const CardFooter = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
  };

  return (
    <div className="chat-footer pb-3 pb-lg-7 position-absolute bottom-0 start-0">
      {/* Chat: Files */}
      <div
        className="dz-preview bg-dark"
        id="dz-preview-row"
        data-horizontal-scroll=""
      ></div>
      {/* Chat: Files */}

      {/* Chat: Form */}
      <form className="chat-form rounded-pill bg-dark" data-emoji-form="">
        <div className="row align-items-center gx-0">
          <div className="col-auto">
            <a
              className="btn btn-icon btn-link text-body rounded-circle"
              onClick={handleClick}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="on-display"
              />
              <FiPaperclip className="feather feather-paperclip" />
            </a>
          </div>

          <div className="col">
            <div className="input-group">
              <textarea
                className="form-control px-0"
                placeholder="Type your message..."
                rows={1}
                data-emoji-input=""
                data-autosize="true"
                style={{
                  overflow: "hidden",
                  overflowWrap: "break-word",
                  resize: "none",
                  height: "46.5556px",
                }}
              ></textarea>

              <a className="input-group-text text-body pe-0" data-emoji-btn="">
                <span className="icon icon-lg">
                  <BsEmojiSmile className="feather feather-smile" />  
                </span>
              </a>
            </div>
          </div>

          <div className="col-auto">
            <button className="btn btn-icon btn-primary rounded-circle ms-5">
              <FiSend className="feather feather-send" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CardFooter;
