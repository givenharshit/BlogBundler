import CodeSnippet from "../utils/CodeSnippet";

const sampleCode = `
import java.awt.*;
import java.awt.event.*;

public class AWTCounter extends Frame implements ActionListener {
    private Label lblCount;
    private TextField tfCount;
    private Button btnCount;
    private int count = 0;

    public AWTCounter() {
        setLayout(new FlowLayout());
        lblCount = new Label("Counter");
        add(lblCount);

        tfCount = new TextField("0", 10);
        tfCount.setEditable(false);
        add(tfCount);

        btnCount = new Button("Count");
        add(btnCount);
        btnCount.addActionListener(this);

        setTitle("AWT Counter");
        setSize(250, 100);
        setVisible(true);
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e) {
                dispose();
            }
        });
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        ++count;
        tfCount.setText(String.valueOf(count));
    }

    public static void main(String[] args) {
        new AWTCounter();
    }
}
`;

export const AWTCounterSnippet = () => {
    return (
        <div className="bg-gray-900 text-white p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-white">AWT Counter - Java Code</h1>
            <CodeSnippet code={sampleCode} language="java" />
        </div>
    );
};
