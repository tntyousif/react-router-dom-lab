import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));

  if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>;
  }

  return (
    <>
      <h2>Mailbox {selectedBox._id}</h2>
      <dl>
        <dt>Boxholder: {selectedBox.boxholder}</dt>

        <dt>Box Size: {selectedBox.boxSize}</dt>
      </dl>
    </>
  );
};

export default MailboxDetails;