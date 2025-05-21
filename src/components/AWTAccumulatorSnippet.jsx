import CodeSnippet from "../utils/CodeSnippet";

const sampleCode = `
import java.awt.*;
import java.awt.event.*;

public class AWTAccumulator extends Frame implements ActionListener {
    private Label lblInput, lblResult;
    private TextField tfInput, tfResult;
    private int sum = 0;

    public AWTAccumulator() {
        setLayout(new FlowLayout());

        lblInput = new Label("Enter an Integer:");
        add(lblInput);

        tfInput = new TextField(10);
        add(tfInput);
        tfInput.addActionListener(this);

        lblResult = new Label("The Accumulated Sum is:");
        add(lblResult);

        tfResult = new TextField(10);
        tfResult.setEditable(false);
        add(tfResult);

        setTitle("AWT Accumulator");
        setSize(350, 120);
        setVisible(true);

        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent windowEvent) {
                System.exit(0);
            }
        });
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == tfInput) {
            try {
                int number = Integer.parseInt(tfInput.getText());
                sum += number;
                tfResult.setText(String.valueOf(sum));
                tfInput.setText(""); // Clear input field
            } catch (NumberFormatException ex) {
                tfResult.setText("Invalid input");
            }
        }
    }

    public static void main(String[] args) {
        new AWTAccumulator();
    }
}
`;

export const AWTAccumulatorSnippet = () => {
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Code Example with Scrolling</h1>
            <CodeSnippet code={sampleCode} language="javascript" />
        </div>
    );
}