import CodeSnippet from "../utils/CodeSnippet";

const sampleCode = [
    `// Creating a text File using FileWriter
import java.io.FileWriter;
import java.io.IOException;
class CreateFile
{
    public static void main(String[] args) throws IOException
    {
        // Accept a string 
        String str = "File Handling in Java using "+
                " FileWriter and FileReader";

        // attach a file to FileWriter 
        FileWriter fw=new FileWriter("output.txt");

        // read character wise from string and write 
        // into FileWriter 
        for (int i = 0; i < str.length(); i++)
            fw.write(str.charAt(i));

        System.out.println("Writing successful");
        //close the file 
        fw.close();
    }
}
`,
`
// Reading data from a file using FileReader
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
class ReadFile
{
    public static void main(String[] args) throws IOException
    {
        // variable declaration
        int ch;

        // check if File exists or not
        FileReader fr=null;
        try
        {
            fr = new FileReader("text");
        }
        catch (FileNotFoundException fe)
        {
            System.out.println("File not found");
        }

        // read from FileReader till the end of file
        while ((ch=fr.read())!=-1)
            System.out.print((char)ch);

        // close the file
        fr.close();
    }
}
`
];

export const FileHandleSnippet = () => {
    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">File Handling - Java Code</h1>
            <CodeSnippet code={sampleCode} language="javascript" />
        </div>
    );
}