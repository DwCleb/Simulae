export function getErrorMessages(data: any): string {
  // uncomment the line below and comments the others if backend return a error array
  // const errorMessages = data.data[0].messages.map((message) => message.message);
  // return errorMessages.join('\n').replace('Identifier', 'Email');
  const errorMessages = data.error;

  return errorMessages;
}
